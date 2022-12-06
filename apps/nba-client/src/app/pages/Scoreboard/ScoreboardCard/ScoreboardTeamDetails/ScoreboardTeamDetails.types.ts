import type { Team } from '@nba-app/types-nba';

export type ScoreboardTeamDetailsProps = Pick<
  Team,
  'teamName' | 'teamId' | 'wins' | 'losses'
>;
