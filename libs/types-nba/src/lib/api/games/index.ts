import type { Meta, GameStatus, Period } from '../common';

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

export interface Game {
  gameId: string;
  gameCode: string;
  gameStatus: GameStatus;
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

interface GetGamesByDateTeam {
  profile: {
    abbr: string;
    city: string;
    cityEn: string;
    code: string;
    conference: string;
    displayAbbr: string;
    displayConference: string;
    division: string;
    id: string;
    isAllStarTeam: boolean;
    isLeagueTeam: boolean;
    leagueId: string;
    name: string;
    nameEn: string;
  };
  matchup: {
    confRank: string;
    divRank: string;
    losses: string;
    seriesText: string | null;
    wins: string;
  };
  pointGameLeader: {
    profile: {
      code: string;
      country: string;
      countryEn: string;
      displayAffiliation: string;
      displayName: string;
      displayNameEn: string;
      dob: string;
      draftYear: string;
      experience: string;
      firstInitial: string;
      firstName: string;
      firstNameEn: string;
      height: string;
      jerseyNo: string;
      lastName: string;
      lastNameEn: string;
      leagueId: string;
      playerId: string;
      position: string;
      schoolType: string;
      weight: string;
    };
    statTotal: {
      assists: number;
      blocks: number;
      defRebs: number;
      efficiency: number;
      fga: number;
      fgm: number;
      fgpct: number;
      fouls: number;
      fta: number;
      ftm: number;
      ftpct: number;
      mins: number;
      offRebs: number;
      points: number;
      rebs: number;
      secs: number;
      steals: number;
      technicalFouls: number;
      tpa: number;
      tpm: number;
      tppct: number;
      turnovers: number;
    };
  };
}

export interface GetGamesByDateReq {
  gameDate: string;
}

export interface GetGamesByDateRes {
  context: {
    user: {
      countryCode: string;
      countryName: string;
      locale: string;
      timeZone: string;
      timeZoneCity: string;
    };
    device: {
      clazz: null;
    };
  };
  error: {
    detail: null;
    isError: string;
    message: null;
  };
  payload: {
    league: {
      id: string;
      name: string;
    };
    season: {
      isCurrent: string;
      rosterSeasonType: number;
      rosterSeasonYear: string;
      rosterSeasonYearDisplay: string;
      scheduleSeasonType: number;
      scheduleSeasonYear: string;
      scheduleYearDisplay: string;
      statsSeasonType: number;
      statsSeasonYear: string;
      statsSeasonYearDisplay: string;
      year: string;
      yearDisplay: string;
    };
    date: {
      dateMillis: string;
      gameCount: string;
      games: {
        profile: {
          arenaLocation: string;
          arenaName: string;
          awayTeamId: string;
          dateTimeEt: string;
          gameId: string;
          homeTeamId: string;
          number: string;
          scheduleCode: null;
          seasonType: string;
          sequence: string;
          utcMillis: string;
        };
        boxscore: {
          attendance: string;
          awayScore: number;
          gameLength: string;
          homeScore: number;
          leadChanges: number;
          officialsDisplayName1: string;
          officialsDisplayName2: string;
          officialsDisplayName3: string;
          period: string;
          periodClock: string;
          status: GameStatus;
          statusDesc: string;
          ties: string;
        };
        urls: [];
        broadcasters: [];
        ifNecessary: boolean;
        seriesText: string;
        homeTeam: GetGamesByDateTeam;
        awayTeam: GetGamesByDateTeam;
      }[];
    };
    nextAvailableDateMillis: string;
    utcMillis: string;
  };
  timestamp: string;
}
