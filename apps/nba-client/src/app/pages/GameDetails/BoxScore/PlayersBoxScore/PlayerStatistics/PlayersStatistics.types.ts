import type { BoxscorePlayer } from '@nba-app/types-nba';

export type PlayersStatisticsProps = Pick<
  BoxscorePlayer,
  'statistics' | 'played'
>;
