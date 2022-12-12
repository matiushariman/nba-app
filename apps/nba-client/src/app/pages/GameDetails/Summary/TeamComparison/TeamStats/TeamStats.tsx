import TeamStatsChart from './TeamStatsChart';

import type { TeamStatsProps } from './TeamStats.types';

const TeamStats = ({ label, awayTeam, homeTeam }: TeamStatsProps) => (
  <div className="grid gap-4">
    <div>
      <p className="font-bold text-sm">{label}</p>
    </div>
    <div className="grid gap-3">
      <div>
        <TeamStatsChart
          teamTricode={awayTeam.teamTricode}
          percentage={awayTeam.percentage}
          secondaryText={awayTeam.secondaryText}
          primaryText={awayTeam.primaryText}
          color="away"
        />
      </div>
      <div>
        <TeamStatsChart
          teamTricode={homeTeam.teamTricode}
          percentage={homeTeam.percentage}
          secondaryText={homeTeam.secondaryText}
          primaryText={homeTeam.primaryText}
        />
      </div>
    </div>
  </div>
);

export default TeamStats;
