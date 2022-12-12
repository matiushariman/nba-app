import type { Leaders } from '@nba-app/types-nba';

export type TopPerformerProps = Pick<
  Leaders,
  | 'personId'
  | 'teamTricode'
  | 'name'
  | 'jerseyNum'
  | 'position'
  | 'points'
  | 'rebounds'
  | 'assists'
>;
