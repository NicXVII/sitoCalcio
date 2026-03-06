import { useEffect, useRef } from 'react';

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
};

const COLORS = {
  nodeBase: [88, 129, 87],
  nodeLight: [163, 177, 138],
  lineBase: [58, 90, 64],
  accent: [122, 170, 131],
  glow: [198, 208, 185],
};

const GeometricBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Check capabilities
    const navInfo = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const lowPower =
      (typeof navInfo.deviceMemory === 'number' && navInfo.deviceMemory <= 4) ||
      (typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4);

    if (reduceMotion || isMobile || lowPower || navInfo.connection?.saveData) {
      canvas.style.display = 'none';
      return;
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let mouseX = -1000;
    let mouseY = -1000;
    let mouseActive = false;
    let rafId = 0;
    let nodes: Node[] = [];
    const connectionDistance = 180;
    const mouseRadius = 220;
    const mouseRepel = 60;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    };

    const initNodes = () => {
      const area = width * height;
      const count = Math.min(Math.max(Math.floor(area / 18000), 30), 120);
      nodes = [];
      for (let i = 0; i < count; i++) {
        const baseRadius = 1.5 + Math.random() * 2.5;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          baseRadius,
          radius: baseRadius,
          hue: Math.random() > 0.7 ? 1 : 0,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.008 + Math.random() * 0.015,
        });
      }
    };

    const drawHexagon = (cx: number, cy: number, r: number, rotation: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + rotation;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const drawTriangle = (cx: number, cy: number, r: number, rotation: number) => {
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = ((Math.PI * 2) / 3) * i + rotation;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update nodes
      for (const node of nodes) {
        node.pulse += node.pulseSpeed;

        // Mouse interaction
        if (mouseActive) {
          const dx = node.x - mouseX;
          const dy = node.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const force = (1 - dist / mouseRadius) * mouseRepel;
            const angle = Math.atan2(dy, dx);
            node.vx += Math.cos(angle) * force * 0.004;
            node.vy += Math.sin(angle) * force * 0.004;
            node.radius = node.baseRadius + (1 - dist / mouseRadius) * 3;
          } else {
            node.radius += (node.baseRadius - node.radius) * 0.05;
          }
        } else {
          node.radius += (node.baseRadius - node.radius) * 0.05;
        }

        // Pulse size
        node.radius += Math.sin(node.pulse) * 0.3;

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Friction
        node.vx *= 0.992;
        node.vy *= 0.992;

        // Keep base velocity
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed < 0.15) {
          node.vx += (Math.random() - 0.5) * 0.05;
          node.vy += (Math.random() - 0.5) * 0.05;
        }

        // Wrap edges
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.18;

            // Check if connection is near mouse
            let lineGlow = 0;
            if (mouseActive) {
              const midX = (nodes[i].x + nodes[j].x) / 2;
              const midY = (nodes[i].y + nodes[j].y) / 2;
              const mouseDist = Math.sqrt(
                (midX - mouseX) * (midX - mouseX) + (midY - mouseY) * (midY - mouseY)
              );
              if (mouseDist < mouseRadius) {
                lineGlow = (1 - mouseDist / mouseRadius) * 0.35;
              }
            }

            const [r, g, b] = lineGlow > 0 ? COLORS.accent : COLORS.lineBase;
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity + lineGlow})`;
            ctx.lineWidth = lineGlow > 0 ? 1.2 : 0.6;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Draw geometric shapes at intersections near mouse
            if (lineGlow > 0.12 && dist < connectionDistance * 0.6) {
              const cx = (nodes[i].x + nodes[j].x) / 2;
              const cy = (nodes[i].y + nodes[j].y) / 2;
              const shapeSize = 4 + lineGlow * 12;
              const rotation = Date.now() * 0.001 + i;

              ctx.save();
              if ((i + j) % 3 === 0) {
                drawHexagon(cx, cy, shapeSize, rotation);
              } else if ((i + j) % 3 === 1) {
                drawTriangle(cx, cy, shapeSize, rotation * 0.7);
              } else {
                ctx.beginPath();
                ctx.rect(cx - shapeSize / 2, cy - shapeSize / 2, shapeSize, shapeSize);
              }
              ctx.strokeStyle = `rgba(${COLORS.accent[0]}, ${COLORS.accent[1]}, ${COLORS.accent[2]}, ${lineGlow * 0.8})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
              ctx.fillStyle = `rgba(${COLORS.glow[0]}, ${COLORS.glow[1]}, ${COLORS.glow[2]}, ${lineGlow * 0.15})`;
              ctx.fill();
              ctx.restore();
            }
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const color = node.hue === 1 ? COLORS.nodeLight : COLORS.nodeBase;

        // Mouse proximity glow
        let glowAlpha = 0;
        if (mouseActive) {
          const dx = node.x - mouseX;
          const dy = node.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            glowAlpha = (1 - dist / mouseRadius) * 0.5;
          }
        }

        if (glowAlpha > 0) {
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.radius * 6
          );
          gradient.addColorStop(0, `rgba(${COLORS.glow[0]}, ${COLORS.glow[1]}, ${COLORS.glow[2]}, ${glowAlpha * 0.4})`);
          gradient.addColorStop(1, 'rgba(198, 208, 185, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 6, 0, Math.PI * 2);
          ctx.fill();
        }

        // Node dot
        const baseAlpha = 0.35 + Math.sin(node.pulse) * 0.1;
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${baseAlpha + glowAlpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Mouse glow ring
      if (mouseActive) {
        const ringGradient = ctx.createRadialGradient(
          mouseX, mouseY, 0,
          mouseX, mouseY, mouseRadius * 0.7
        );
        ringGradient.addColorStop(0, 'rgba(122, 170, 131, 0.06)');
        ringGradient.addColorStop(0.5, 'rgba(88, 129, 87, 0.03)');
        ringGradient.addColorStop(1, 'rgba(58, 90, 64, 0)');
        ctx.fillStyle = ringGradient;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, mouseRadius * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(render);
    };

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseActive = true;
    };

    const onPointerLeave = () => {
      mouseActive = false;
      mouseX = -1000;
      mouseY = -1000;
    };

    resize();
    rafId = requestAnimationFrame(render);

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
};

export default GeometricBackground;
