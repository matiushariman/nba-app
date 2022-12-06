import type { Team, Game } from '@nba-app/types-nba';

type ScoreboardTeam = Pick<
  Team,
  'teamId' | 'teamName' | 'wins' | 'losses' | 'score'
>;

export interface ScoreboardCardProps extends Pick<Game, 'gameStatusText'> {
  readonly homeTeam: ScoreboardTeam;
  readonly awayTeam: ScoreboardTeam;
}
