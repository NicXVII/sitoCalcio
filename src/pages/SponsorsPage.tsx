import SectionTitle from '../components/SectionTitle';
import { sponsors } from '../data/sponsorsData';
import { usePageTitle } from '../hooks/usePageTitle';

const mainSponsors = sponsors.filter((sponsor) => sponsor.tier === 'main');
const officialSponsors = sponsors.filter((sponsor) => sponsor.tier === 'official');
const communitySponsors = sponsors.filter((sponsor) => sponsor.tier === 'community');

const SponsorsPage = () => {
  usePageTitle('Sponsor');

  return (
    <div className="space-y-8 tablet-small:space-y-10">
      <SectionTitle
        eyebrow="Sponsor Ufficiali"
        title="Le Aziende che Sostengono il Domio"
        description="Una rete reale di partner che investe in giovani, territorio e continuita sportiva. Loghi ottimizzati in WebP per una navigazione piu veloce su tutti i dispositivi."
      />

      <section className="surface-card rounded-3xl border border-field-100 p-4 mobile-small:p-6 tablet-small:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-3xl uppercase tracking-wide text-field-900 mobile-small:text-4xl">Main Sponsor</h3>
          <p className="rounded-full border border-field-200 bg-field-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-field-700 mobile-small:text-xs">
            Stagione 2025/2026
          </p>
        </div>

        <div className="mt-5 grid gap-4 tablet-small:grid-cols-2 desktop:grid-cols-12">
          {mainSponsors.map((sponsor, index) => (
            <article
              key={sponsor.name}
              className={`group rounded-3xl border border-field-100 bg-white/92 p-4 shadow-[0_20px_45px_-25px_rgba(20,31,26,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-24px_rgba(23,36,25,0.48)] ${
                index === 0 ? 'tablet-small:col-span-2 desktop:col-span-6' : 'desktop:col-span-3'
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-field-700">Main Partner</p>
              <h4 className="mt-2 font-display text-2xl uppercase tracking-wide text-field-900 mobile-small:text-3xl">{sponsor.name}</h4>
              <div className="mt-4 flex h-28 items-center justify-center rounded-2xl border border-field-100 bg-white p-3 mobile-small:h-32">
                {sponsor.logo ? (
                  <img
                    src={sponsor.logo}
                    alt={`Logo ${sponsor.name}`}
                    width={320}
                    height={160}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="max-h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <p className="font-display text-2xl uppercase tracking-wide text-field-800">{sponsor.name}</p>
                )}
              </div>
              <p className="mt-4 text-sm text-field-800">{sponsor.summary}</p>
              {sponsor.website ? (
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-full border border-field-300 bg-field-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-field-800 transition hover:border-field-500 hover:bg-field-100"
                >
                  Visita Sponsor
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-3xl uppercase tracking-wide text-field-900 mobile-small:text-4xl">Partner Ufficiali</h3>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-field-700">Massima visibilita dei brand</p>
        </div>

        <div className="grid gap-4 mobile:grid-cols-2 tablet-small:grid-cols-3 desktop:grid-cols-4">
          {officialSponsors.map((sponsor) => (
            <article
              key={sponsor.name}
              className="surface-card group rounded-2xl border border-field-100 p-4 transition hover:-translate-y-0.5 hover:shadow-[0_20px_42px_-22px_rgba(20,31,26,0.42)]"
            >
              <div className="flex h-24 items-center justify-center rounded-xl border border-field-100 bg-white p-3 mobile-small:h-28">
                {sponsor.logo ? (
                  <img
                    src={sponsor.logo}
                    alt={`Logo ${sponsor.name}`}
                    width={320}
                    height={160}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="max-h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <p className="font-display text-xl uppercase tracking-wide text-field-800">{sponsor.name}</p>
                )}
              </div>
              <h4 className="mt-3 font-display text-2xl uppercase tracking-wide text-field-900">{sponsor.name}</h4>
              <p className="mt-2 text-sm text-field-800">{sponsor.summary}</p>
              {sponsor.website ? (
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-field-700 underline underline-offset-4"
                >
                  Apri Sito
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 tablet-small:grid-cols-2">
        {communitySponsors.map((sponsor) => (
          <article key={sponsor.name} className="surface-card rounded-2xl border border-field-100 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-field-700">Partner del Territorio</p>
            <h4 className="mt-2 font-display text-3xl uppercase tracking-wide text-field-900">{sponsor.name}</h4>
            <p className="mt-2 text-sm text-field-800">{sponsor.summary}</p>
            {sponsor.website ? (
              <a
                href={sponsor.website}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-field-700 underline underline-offset-4"
              >
                Dettagli Sponsor
              </a>
            ) : null}
          </article>
        ))}
      </section>

      <section className="surface-panel rounded-3xl border border-field-100 p-6 tablet-small:p-8">
        <h3 className="font-display text-3xl uppercase tracking-wide text-field-900">Diventa Sponsor</h3>
        <p className="mt-2 max-w-3xl text-field-800">
          Partnership su maglie, eventi, media digitali e settore giovanile con piani scalabili per piccole e grandi
          aziende.
        </p>
        <a
          href="mailto:sponsor@domiocalcio.com"
          className="mt-4 inline-flex rounded-full bg-field-600 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-field-700"
        >
          Richiedi Proposta Partnership
        </a>
      </section>
    </div>
  );
};

export default SponsorsPage;
