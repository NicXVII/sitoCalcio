import type { Team } from '../data/siteData';

type TeamCardProps = {
  team: Team;
};

const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <article className="surface-card reveal-up flex h-full flex-col justify-between rounded-2xl border border-field-100 p-4 transition duration-300 hover:-translate-y-1 mobile-small:p-5 sm:p-6">
      <div className="space-y-4">
        <div className="flex flex-col gap-2 mobile:items-center mobile:justify-between mobile:gap-3 tablet-small:flex-row">
          <h3 className="font-display text-2xl uppercase tracking-wide text-field-900 mobile:text-3xl">{team.name}</h3>
          <span className="w-fit rounded-full bg-field-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-field-700 mobile-small:text-xs">
            {team.category}
          </span>
        </div>
        <p className="text-sm text-field-900/85 mobile-small:text-base">{team.description}</p>
        <p className="text-sm font-semibold text-field-700">Allenamenti: {team.training}</p>
        <p className="rounded-xl bg-field-50 p-3 text-sm text-field-800">Prossimo appuntamento: {team.nextMatch}</p>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {team.modules.map((module) => (
          <li key={module} className="rounded-full border border-field-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-field-800">
            {module}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default TeamCard;
