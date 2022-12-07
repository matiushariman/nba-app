import type { Team } from '@nba-app/types-nba';

export type TeamDetailsProps = Pick<
  Team,
  'teamName' | 'teamId' | 'wins' | 'losses'
>;
