import type { BoxscorePlayer, Team } from '@nba-app/types-nba';

export interface InjuryListItemProps
  extends Pick<BoxscorePlayer, 'personId' | 'name' | 'jerseyNum'> {
  readonly teamId: Team['teamId'];
  readonly teamTricode: Team['teamTricode'];
}
