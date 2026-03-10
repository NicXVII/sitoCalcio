import SectionTitle from '../components/SectionTitle';
import { sponsors } from '../data/sponsorsData';
import { usePageTitle } from '../hooks/usePageTitle';

const mainSponsors = sponsors.filter((sponsor) => sponsor.tier === 'main');
const officialSponsors = sponsors.filter((sponsor) => sponsor.tier === 'official');
const communitySponsors = sponsors.filter((sponsor) => sponsor.tier === 'community');

const SponsorsPage = () => {
  usePageTitle('Sponsor');

  return (
    <div className="space-y-10 tablet-small:space-y-12">
      <SectionTitle
        eyebrow="Sponsor ufficiali"
        title="Le aziende che sostengono il Domio"
        description="Una rete reale di partner che investe in giovani, territorio e continuita sportiva."
      />

      {/* Main Sponsors — large prominence */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-3xl tracking-wide text-field-900 mobile-small:text-4xl">Main Sponsor</h3>
          <p className="rounded-full bg-field-800 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white mobile-small:text-xs">
            Stagione 2025/2026
          </p>
        </div>

        <div className="grid gap-4 tablet-small:grid-cols-2 desktop:grid-cols-3">
          {mainSponsors.map((sponsor) => (
            <article
              key={sponsor.name}
              className="group rounded-2xl border border-field-300 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex h-36 items-center justify-center rounded-xl border border-field-100 bg-field-50/40 p-4 mobile-small:h-40">
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
                  <p className="font-display text-2xl text-field-800">{sponsor.name}</p>
                )}
              </div>
              <h4 className="mt-4 font-display text-xl tracking-wide text-field-900">{sponsor.name}</h4>
              <p className="mt-2 text-sm text-field-700">{sponsor.summary}</p>
              {sponsor.website ? (
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-field-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-field-700"
                >
                  Visita sito <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* Official Partners */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-3xl tracking-wide text-field-900 mobile-small:text-4xl">Partner ufficiali</h3>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-field-600">Visibilita garantita</p>
        </div>

        <div className="grid gap-4 mobile:grid-cols-2 tablet-small:grid-cols-3 desktop:grid-cols-4">
          {officialSponsors.map((sponsor) => (
            <article
              key={sponsor.name}
              className="group rounded-2xl border border-field-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-28 items-center justify-center rounded-xl border border-field-100 bg-field-50/30 p-3 mobile-small:h-32">
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
                  <p className="font-display text-xl text-field-800">{sponsor.name}</p>
                )}
              </div>
              <h4 className="mt-3 font-display text-lg tracking-wide text-field-900">{sponsor.name}</h4>
              <p className="mt-1 text-sm text-field-700">{sponsor.summary}</p>
              {sponsor.website ? (
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-field-600 underline underline-offset-4 hover:text-field-800"
                >
                  Sito web <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* Community Partners */}
      {communitySponsors.length > 0 && (
        <section className="space-y-5">
          <h3 className="font-display text-3xl tracking-wide text-field-900 mobile-small:text-4xl">Sostenitori del territorio</h3>
          <div className="grid gap-4 tablet-small:grid-cols-2">
            {communitySponsors.map((sponsor) => (
              <article key={sponsor.name} className="rounded-2xl border border-field-200 bg-white p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-field-600">Partner locale</p>
                <h4 className="mt-2 font-display text-xl tracking-wide text-field-900">{sponsor.name}</h4>
                <p className="mt-2 text-sm text-field-700">{sponsor.summary}</p>
                {sponsor.website ? (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-field-600 underline underline-offset-4 hover:text-field-800"
                  >
                    Dettagli <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="rounded-3xl bg-field-700 p-6 tablet-small:p-8">
        <h3 className="font-display text-3xl tracking-wide text-white">Diventa sponsor</h3>
        <p className="mt-2 max-w-3xl text-field-100">
          Partnership su maglie, eventi, media digitali e settore giovanile con piani scalabili per piccole e grandi
          aziende.
        </p>
        <a
          href="mailto:sponsor@domiocalcio.com"
          className="mt-5 inline-flex rounded-full bg-field-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-field-400"
        >
          Richiedi proposta partnership
        </a>
      </section>
    </div>
  );
};

export default SponsorsPage;
