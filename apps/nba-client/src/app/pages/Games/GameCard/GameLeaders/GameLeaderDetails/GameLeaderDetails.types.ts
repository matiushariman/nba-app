import type { Leaders } from '@nba-app/types-nba';

export type GameLeaderDetailsProps = Pick<
  Leaders,
  'name' | 'jerseyNum' | 'teamTricode' | 'position' | 'personId'
>;
