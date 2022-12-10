interface Meta {
  version: number;
  request: string;
  time: string;
  code: number;
}

interface Period {
  period: number;
  periodType: string;
  score: number;
}

export interface Team {
  teamId: number;
  teamName: string;
  teamCity: string;
  teamTricode: string;
  wins: number;
  losses: number;
  score: number;
  seed: null;
  inBonus: null;
  timeoutsRemaining: number;
  periods: Period[];
}

export interface Leaders {
  personId: number;
  name: string;
  jerseyNum: string;
  position: string;
  teamTricode: string;
  playerSlug: null | string;
  points: number;
  rebounds: number;
  assists: number;
}

interface GameLeaders {
  homeLeaders: Leaders;
  awayLeaders: Leaders;
}

interface PbOdds {
  team: null;
  odds: number;
  suspended: number;
}

export const GameStatusEnum = {
  pregame: 1,
  livegame: 2,
  endgame: 3,
} as const;

type ReverseMap<T> = T[keyof T];

export interface Game {
  gameId: string;
  gameCode: string;
  gameStatus: ReverseMap<typeof GameStatusEnum>;
  gameStatusText: string;
  period: number;
  gameClock: string;
  gameTimeUTC: string;
  gameEt: string;
  regulationPeriods: number;
  ifNecessary: boolean;
  seriesGameNumber: string;
  seriesText: string;
  homeTeam: Team;
  awayTeam: Team;
  gameLeaders: GameLeaders;
  pbOdds: PbOdds;
}

interface Scoreboard {
  gameDate: string;
  leagueId: string;
  leagueName: string;
  games: Game[];
}

export interface GetGamesRes {
  meta: Meta;
  scoreboard: Scoreboard;
}

export interface GetGameByIdReq {
  gameId: string;
}

export type GetGameByIdRes = Game;
