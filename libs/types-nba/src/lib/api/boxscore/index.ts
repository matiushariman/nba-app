import type { Meta, GameStatus, Period } from '../common';
import type { ReverseMap } from '../utils';

interface BoxscoreArena {
  arenaId: number;
  arenaName: string;
  arenaCity: string;
  arenaState: string;
  arenaCountry: string;
  arenaTimezone: string;
}

interface BoxscoreOfficial {
  personId: number;
  name: string;
  nameI: string;
  firstName: string;
  familyName: string;
  jerseyNum: string;
  assignment: string;
}

const BoxscorePlayerStatusEnum = {
  active: 'ACTIVE',
  inactive: 'INACTIVE',
} as const;

type BoxscorePlayerStatus = ReverseMap<typeof BoxscorePlayerStatusEnum>;

interface BoxscorePlayerStatistics {
  assists: number;
  blocks: number;
  blocksReceived: number;
  fieldGoalsAttempted: number;
  fieldGoalsMade: number;
  fieldGoalsPercentage: number;
  foulsOffensive: number;
  foulsDrawn: number;
  foulsPersonal: number;
  foulsTechnical: number;
  freeThrowsAttempted: number;
  freeThrowsMade: number;
  freeThrowsPercentage: number;
  minus: number;
  minutes: string;
  minutesCalculated: string;
  plus: number;
  plusMinusPoints: number;
  points: number;
  pointsFastBreak: number;
  pointsInThePaint: number;
  pointsSecondChance: number;
  reboundsDefensive: number;
  reboundsOffensive: number;
  reboundsTotal: number;
  steals: number;
  threePointersAttempted: number;
  threePointersMade: number;
  threePointersPercentage: number;
  turnovers: number;
  twoPointersAttempted: number;
  twoPointersMade: number;
  twoPointersPercentage: number;
}

export interface BoxscorePlayer {
  status: BoxscorePlayerStatus;
  order: number;
  personId: number;
  jerseyNum: string;
  position?: string;
  starter: string;
  oncourt: string;
  played: string;
  name: string;
  nameI: string;
  notPlayingReason?: string;
  notPlayingDescription?: string;
  firstName: string;
  familyName: string;
  statistics: BoxscorePlayerStatistics;
}

interface BoxscoreTeamStatistics {
  assists: number;
  assistsTurnoverRatio: number;
  benchPoints: number;
  biggestLead: number;
  biggestLeadScore: string;
  biggestScoringRun: number;
  biggestScoringRunScore: string;
  blocks: number;
  blocksReceived: number;
  fastBreakPointsAttempted: number;
  fastBreakPointsMade: number;
  fastBreakPointsPercentage: number;
  fieldGoalsAttempted: number;
  fieldGoalsEffectiveAdjusted: number;
  fieldGoalsMade: number;
  fieldGoalsPercentage: number;
  foulsOffensive: number;
  foulsDrawn: number;
  foulsPersonal: number;
  foulsTeam: number;
  foulsTechnical: number;
  foulsTeamTechnical: number;
  freeThrowsAttempted: number;
  freeThrowsMade: number;
  freeThrowsPercentage: number;
  leadChanges: number;
  minutes: string;
  minutesCalculated: string;
  points: number;
  pointsAgainst: number;
  pointsFastBreak: number;
  pointsFromTurnovers: number;
  pointsInThePaint: number;
  pointsInThePaintAttempted: number;
  pointsInThePaintMade: number;
  pointsInThePaintPercentage: number;
  pointsSecondChance: number;
  reboundsDefensive: number;
  reboundsOffensive: number;
  reboundsPersonal: number;
  reboundsTeam: number;
  reboundsTeamDefensive: number;
  reboundsTeamOffensive: number;
  reboundsTotal: number;
  secondChancePointsAttempted: number;
  secondChancePointsMade: number;
  secondChancePointsPercentage: number;
  steals: number;
  threePointersAttempted: number;
  threePointersMade: number;
  threePointersPercentage: number;
  timeLeading: string;
  timesTied: number;
  trueShootingAttempts: number;
  trueShootingPercentage: number;
  turnovers: number;
  turnoversTeam: number;
  turnoversTotal: number;
  twoPointersAttempted: number;
  twoPointersMade: number;
  twoPointersPercentage: number;
}

export interface BoxscoreTeam {
  teamId: number;
  teamName: string;
  teamCity: string;
  teamTricode: string;
  score: number;
  inBonus: string;
  timeoutsRemaining: number;
  periods: Period[];
  players: BoxscorePlayer[];
  statistics: BoxscoreTeamStatistics;
}

export interface BoxscoreGame {
  gameId: string;
  gameTimeLocal: string;
  gameTimeUTC: string;
  gameTimeHome: string;
  gameTimeAway: string;
  gameEt: string;
  duration: number;
  gameCode: string;
  gameStatusText: string;
  gameStatus: GameStatus;
  regulationPeriods: number;
  period: number;
  gameClock: string;
  attendance: number;
  sellout: string;
  arena: BoxscoreArena;
  officials: BoxscoreOfficial[];
  homeTeam: BoxscoreTeam;
  awayTeam: BoxscoreTeam;
}

export interface GetBoxscoreByGameIdRes {
  meta: Meta;
  game: BoxscoreGame;
}

export interface GetBoxscoreByGameIdReq {
  gameId: string;
}
