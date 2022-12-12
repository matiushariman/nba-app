import type { Team } from '@nba-app/types-nba';

type TeamStats = {
  readonly teamTricode: Team['teamTricode'];
  readonly percentage: number;
  readonly secondaryText?: string;
  readonly primaryText: string | number;
};

export interface TeamStatsProps {
  readonly label: string;
  readonly awayTeam: TeamStats;
  readonly homeTeam: TeamStats;
}
