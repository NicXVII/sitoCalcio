import type { Team } from '../data/types';

type TeamCardProps = {
  team: Team;
  variant?: 'agonistico' | 'base';
};

const TeamCard = ({ team, variant = 'agonistico' }: TeamCardProps) => {
  const borderColor = variant === 'agonistico' ? 'border-field-300' : 'border-field-200';
  const badgeBg = variant === 'agonistico' ? 'bg-field-800 text-white' : 'bg-field-100 text-field-700';

  return (
    <article className={`flex h-full flex-col justify-between rounded-2xl border ${borderColor} bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg mobile-small:p-5 sm:p-6`}>
      <div className="space-y-4">
        <div className="flex flex-col gap-2 mobile:items-center mobile:justify-between mobile:gap-3 tablet-small:flex-row">
          <h3 className="font-display text-xl tracking-wide text-field-900 mobile:text-2xl">{team.name}</h3>
          <span className={`w-fit rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] ${badgeBg}`}>
            {team.category}
          </span>
        </div>
        <p className="text-sm text-field-700 mobile-small:text-base">{team.description}</p>
        <div className="text-sm">
          <p className="flex items-center gap-2 rounded-xl border border-field-100 bg-field-50/60 px-3 py-2 text-field-700">
            <span className="font-semibold text-field-800">Allenamenti:</span> {team.training}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-2">
          {team.modules.map((module) => (
            <li key={module} className="rounded-full border border-field-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-field-600">
              {module}
            </li>
          ))}
        </ul>

      </div>
    </article>
  );
};

export default TeamCard;
