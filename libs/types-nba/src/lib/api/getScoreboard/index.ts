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

interface Team {
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

interface Leaders {
  personId: number;
  name: string;
  jerseyNum: string;
  position: string;
  teamTricode: string;
  playerSlug: null;
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

interface Game {
  gameId: string;
  gameCode: string;
  gameStatus: number;
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
  gameLeader: GameLeaders;
  pbOdds: PbOdds;
}

interface Scoreboard {
  gameDate: string;
  leagueId: string;
  leagueName: string;
  games: Game[];
}

export interface GetScoreboardRes {
  meta: Meta;
  scoreboard: Scoreboard;
}
