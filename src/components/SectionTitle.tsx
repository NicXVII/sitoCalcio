type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

const SectionTitle = ({ eyebrow, title, description }: SectionTitleProps) => {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-field-200 bg-field-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-field-700 mobile-small:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl uppercase tracking-wide text-field-900 mobile-small:text-4xl sm:text-5xl tablet-large:text-6xl">
        {title}
      </h2>
      {description ? <p className="max-w-3xl text-sm text-field-800/90 mobile-small:text-base sm:text-lg">{description}</p> : null}
    </div>
  );
};

export default SectionTitle;
