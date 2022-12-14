import type { Team } from '@nba-app/types-nba';

export interface TeamStatsChartProps extends Pick<Team, 'teamTricode'> {
  readonly percentage?: number;
  readonly secondaryText?: string;
  readonly primaryText: string | number;
  readonly color?: 'home' | 'away';
}
