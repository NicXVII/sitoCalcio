type ClubLogoProps = {
  alt: string;
  className: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
};

const ClubLogo = ({ alt, className, loading = 'lazy', fetchPriority = 'auto' }: ClubLogoProps) => {
  return (
    <picture>
      <source srcSet="/logo.webp" type="image/webp" />
      <img
        src="/logo.png"
        alt={alt}
        width={600}
        height={612}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={className}
      />
    </picture>
  );
};

export default ClubLogo;
