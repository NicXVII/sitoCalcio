import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import ClubLogo from '../components/ClubLogo';
import { contacts, extraNavItems, mainNavItems } from '../data/navigationData';

const GeometricBackground = lazy(() => import('../components/GeometricBackground'));

const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition ${
    isActive ? 'bg-field-600 text-white' : 'text-field-800 hover:bg-field-100'
  }`;

const dropdownClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] whitespace-normal break-words transition ${
    isActive ? 'bg-field-600 text-white' : 'text-field-800 hover:bg-field-100'
  }`;

const SiteLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMoreOpen, setIsDesktopMoreOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const moreButtonRef = useRef<HTMLButtonElement | null>(null);
  const moreMenuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopMoreOpen(false);
    setIsMobileMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isDesktopMoreOpen) {
      return;
    }

    const closeMenu = () => setIsDesktopMoreOpen(false);

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (moreButtonRef.current?.contains(target) || moreMenuRef.current?.contains(target)) {
        return;
      }

      closeMenu();
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    const handleViewportChange = () => {
      if (window.innerWidth < 1024) {
        closeMenu();
      }
    };

    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('scroll', closeMenu, { passive: true });
    window.addEventListener('resize', handleViewportChange);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('scroll', closeMenu);
      window.removeEventListener('resize', handleViewportChange);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isDesktopMoreOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const root = document.documentElement;
    const navInfo = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean; effectiveType?: string };
    };
    const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const compactViewport = window.matchMedia('(max-width: 1200px)').matches;
    const memoryCores =
      (typeof navInfo.deviceMemory === 'number' && navInfo.deviceMemory <= 6) ||
      (typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 8);
    const lowPowerDevice =
      (typeof navInfo.deviceMemory === 'number' && navInfo.deviceMemory <= 4) ||
      (typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4);
    const saveData = navInfo.connection?.saveData === true;
    const networkType = navInfo.connection?.effectiveType;
    const slowNetwork = networkType === 'slow-2g' || networkType === '2g';
    const disableInteractiveEffects =
      !supportsFinePointer || reduceMotion || compactViewport || lowPowerDevice || saveData || slowNetwork;

    root.classList.toggle('effects-off', disableInteractiveEffects);
    root.classList.toggle('effects-lite', !disableInteractiveEffects && memoryCores);
    root.style.setProperty('--mouse-active', '0');
    root.style.setProperty('--trail-active', '0');

    if (disableInteractiveEffects) {
      return () => {
        root.classList.remove('effects-off');
        root.classList.remove('effects-lite');
      };
    }

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let renderX = pointerX;
    let renderY = pointerY;
    let trailX = pointerX;
    let trailY = pointerY;
    let targetIntensity = 0;
    let currentIntensity = 0;
    let trailIntensity = 0;
    let rafId = 0;
    const pointerEase = memoryCores ? 0.22 : 0.18;
    const trailEase = memoryCores ? 0.2 : 0.11;
    const maxIntensity = memoryCores ? 0.84 : 0.94;

    const stopRender = () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const renderGlow = () => {
      renderX += (pointerX - renderX) * pointerEase;
      renderY += (pointerY - renderY) * pointerEase;
      trailX += (renderX - trailX) * trailEase;
      trailY += (renderY - trailY) * trailEase;
      currentIntensity += (targetIntensity - currentIntensity) * 0.16;
      trailIntensity += (currentIntensity - trailIntensity) * 0.14;

      root.style.setProperty('--mouse-x', `${renderX}px`);
      root.style.setProperty('--mouse-y', `${renderY}px`);
      root.style.setProperty('--mouse-active', currentIntensity.toFixed(3));
      root.style.setProperty('--trail-x', `${trailX}px`);
      root.style.setProperty('--trail-y', `${trailY}px`);
      root.style.setProperty('--trail-active', trailIntensity.toFixed(3));

      if (
        Math.abs(renderX - pointerX) > 0.1 ||
        Math.abs(renderY - pointerY) > 0.1 ||
        Math.abs(trailX - renderX) > 0.1 ||
        Math.abs(trailY - renderY) > 0.1 ||
        Math.abs(currentIntensity - targetIntensity) > 0.01 ||
        Math.abs(trailIntensity - currentIntensity) > 0.01
      ) {
        rafId = window.requestAnimationFrame(renderGlow);
      } else {
        rafId = 0;
      }
    };

    const requestRender = () => {
      if (!document.hidden && rafId === 0) {
        rafId = window.requestAnimationFrame(renderGlow);
      }
    };

    const shouldSkipEffects = () => window.innerWidth <= 1200;

    const handleMove = (event: PointerEvent) => {
      if (shouldSkipEffects()) {
        targetIntensity = 0;
        root.style.setProperty('--mouse-active', '0');
        root.style.setProperty('--trail-active', '0');
        stopRender();
        return;
      }

      pointerX = event.clientX;
      pointerY = event.clientY;
      targetIntensity = maxIntensity;
      requestRender();
    };

    const handleEnter = () => {
      if (shouldSkipEffects()) {
        return;
      }

      targetIntensity = maxIntensity;
      requestRender();
    };

    const handleLeave = () => {
      targetIntensity = 0;
      requestRender();
    };

    const handleVisibility = () => {
      if (document.hidden) {
        targetIntensity = 0;
        currentIntensity = 0;
        trailIntensity = 0;
        root.style.setProperty('--mouse-active', '0');
        root.style.setProperty('--trail-active', '0');
        stopRender();
      }
    };

    root.style.setProperty('--mouse-x', `${pointerX}px`);
    root.style.setProperty('--mouse-y', `${pointerY}px`);
    root.style.setProperty('--trail-x', `${trailX}px`);
    root.style.setProperty('--trail-y', `${trailY}px`);
    root.style.setProperty('--mouse-active', '0');
    root.style.setProperty('--trail-active', '0');

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerenter', handleEnter);
    window.addEventListener('pointerleave', handleLeave);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      stopRender();
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerenter', handleEnter);
      window.removeEventListener('pointerleave', handleLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
      root.style.setProperty('--mouse-active', '0');
      root.style.setProperty('--trail-active', '0');
      root.classList.remove('effects-off');
      root.classList.remove('effects-lite');
    };
  }, []);

  return (
    <>
    <Suspense fallback={null}><GeometricBackground /></Suspense>
    <div className="interactive-metal-bg flex min-h-screen flex-col text-field-900">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-field-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none">
        Vai al contenuto principale
      </a>
      <header className="sticky top-0 z-[120] overflow-visible border-b border-field-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-3 mobile-small:px-4 mobile-small:py-4 mobile:px-5 sm:px-6 tablet-large:px-8 ultrawide:max-w-[1536px]">
          <div className="flex items-center gap-2 mobile-small:gap-3 sm:gap-4">
            <ClubLogo
              alt="Logo A.S.D. Domio Calcio"
              loading="eager"
              fetchPriority="high"
              className="h-12 w-12 rounded-xl border border-field-200 bg-white p-1 object-contain shadow-sm mobile-small:h-14 mobile-small:w-14 sm:h-16 sm:w-16"
            />
            <div>
              <p className="font-display text-2xl uppercase tracking-wide text-field-900 mobile-small:text-3xl">A.S.D. Domio Calcio</p>
              <p className="text-xs uppercase tracking-[0.2em] text-field-700">San Dorligo della Valle</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen((prev) => {
                const next = !prev;

                if (!next) {
                  setIsMobileMoreOpen(false);
                }

                return next;
              });
            }}
            className="rounded-full border border-field-200 p-2.5 text-field-800 mobile:p-3 tablet-large:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>

          <nav className="relative z-[130] hidden items-center gap-2 tablet-large:flex">
            {mainNavItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={navClass}>
                {item.label}
              </NavLink>
            ))}

            <div className="relative z-[135]">
              <button
                type="button"
                ref={moreButtonRef}
                className="rounded-full border border-field-200 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-field-800 transition hover:border-field-300"
                onClick={() => setIsDesktopMoreOpen((prev) => !prev)}
                aria-expanded={isDesktopMoreOpen}
                aria-controls="menu-altro-desktop"
                aria-label="Apri menu altro"
              >
                Altro
              </button>
              {isDesktopMoreOpen ? (
                <div
                  id="menu-altro-desktop"
                  ref={moreMenuRef}
                  className="absolute right-0 top-[calc(100%+0.5rem)] z-[140] min-w-[18rem] max-w-[22rem] overflow-x-hidden overflow-y-auto overscroll-contain rounded-2xl border border-field-200 bg-white p-2 shadow-[0_26px_42px_-22px_rgba(20,31,26,0.45)] max-h-[min(70vh,28rem)]"
                >
                  {extraNavItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={dropdownClass}
                      onClick={() => setIsDesktopMoreOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          </nav>
        </div>

        {isMobileMenuOpen ? (
          <nav className="border-t border-field-100 px-3 py-3 mobile-small:px-4 mobile-small:py-4 tablet-large:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={navClass}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileMoreOpen(false);
                  }}
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="rounded-2xl border border-field-100 bg-white/80 p-3">
                <button
                  type="button"
                  onClick={() => setIsMobileMoreOpen((prev) => !prev)}
                  aria-expanded={isMobileMoreOpen}
                  aria-controls="menu-altro-mobile"
                  className="w-full text-left text-sm font-semibold uppercase tracking-[0.12em] text-field-800"
                >
                  Altro
                </button>
                {isMobileMoreOpen ? (
                  <div
                    id="menu-altro-mobile"
                    className="mt-3 grid max-h-[40vh] gap-2 overflow-y-auto overscroll-contain pr-1"
                  >
                    {extraNavItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={navClass}
                        onClick={() => {
                          setIsMobileMoreOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </nav>
        ) : null}
      </header>

      {isMobileMenuOpen ? (
        <button
          type="button"
          aria-label="Chiudi menu"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsMobileMoreOpen(false);
          }}
          className="fixed inset-0 z-[115] bg-field-900/20 backdrop-blur-[1px] tablet-large:hidden"
        />
      ) : null}

      <main id="main-content" className="mx-auto w-full max-w-7xl flex-1 px-3 py-6 mobile-small:px-4 mobile-small:py-8 mobile:px-5 sm:px-6 sm:py-10 tablet-large:px-8 desktop:py-12 ultrawide:max-w-[1536px]">
        <Outlet />
      </main>

      <footer className="mt-auto border-t border-field-200 bg-field-900 text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-3 py-7 text-sm mobile-small:px-4 mobile:px-5 sm:px-6 tablet-large:px-8 ultrawide:max-w-[1536px]">
          <p className="font-display text-xl uppercase tracking-wide mobile:text-2xl">A.S.D. Domio Calcio</p>
          <p>{contacts.address}</p>
          <p>
            {contacts.email} | {contacts.phone}
          </p>
          <p className="text-white/70">Nuova piattaforma digitale 2026: sport, educazione, comunita.</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default SiteLayout;
