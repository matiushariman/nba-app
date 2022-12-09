import type { Team } from '@nba-app/types-nba';

export interface TeamLogoProps extends Pick<Team, 'teamId' | 'teamName'> {
  readonly width?: number;
  readonly height?: number;
  readonly mode?: 'L' | 'D';
}
