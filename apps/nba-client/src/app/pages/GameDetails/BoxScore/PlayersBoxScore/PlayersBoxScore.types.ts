import type { BoxscoreTeam } from '@nba-app/types-nba';

export type PlayersBoxScoreProps = Pick<
  BoxscoreTeam,
  'teamName' | 'players' | 'teamCity'
>;
