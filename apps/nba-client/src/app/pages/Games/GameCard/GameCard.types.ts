import type { Team, Game } from '@nba-app/types-nba';

type GameTeam = Pick<Team, 'teamId' | 'teamName' | 'wins' | 'losses' | 'score'>;

export interface GameCardProps
  extends Pick<Game, 'gameStatusText' | 'gameLeaders'> {
  readonly homeTeam: GameTeam;
  readonly awayTeam: GameTeam;
}
