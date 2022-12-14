import { rest } from 'msw';
import { GetGamesRes, GetGameByIdRes } from '@nba-app/types-nba';

export const mockGames = {
  meta: {
    version: 1,
    request:
      'https://nba-prod-us-east-1-mediaops-stats.s3.amazonaws.com/NBA/liveData/scoreboard/todaysScoreboard_00.json',
    time: '2022-12-12 09:43:05.435',
    code: 200,
  },
  scoreboard: {
    gameDate: '2022-12-12',
    leagueId: '00',
    leagueName: 'National Basketball Association',
    games: [
      {
        gameId: '0022200405',
        gameCode: '20221212/OKCDAL',
        gameStatus: 2,
        gameStatusText: 'Half',
        period: 2,
        gameClock: 'PT00M00.00S',
        gameTimeUTC: '2022-12-13T01:30:00Z',
        gameEt: '2022-12-12T20:30:00-05:00',
        regulationPeriods: 4,
        ifNecessary: false,
        seriesGameNumber: '',
        seriesText: '',
        homeTeam: {
          teamId: 1610612742,
          teamName: 'Mavericks',
          teamCity: 'Dallas',
          teamTricode: 'DAL',
          wins: 13,
          losses: 13,
          score: 66,
          seed: null,
          inBonus: '0',
          timeoutsRemaining: 5,
          periods: [
            { period: 1, periodType: 'REGULAR', score: 23 },
            { period: 2, periodType: 'REGULAR', score: 43 },
            { period: 3, periodType: 'REGULAR', score: 0 },
            { period: 4, periodType: 'REGULAR', score: 0 },
          ],
        },
        awayTeam: {
          teamId: 1610612760,
          teamName: 'Thunder',
          teamCity: 'Oklahoma City',
          teamTricode: 'OKC',
          wins: 11,
          losses: 15,
          score: 52,
          seed: null,
          inBonus: '0',
          timeoutsRemaining: 5,
          periods: [
            { period: 1, periodType: 'REGULAR', score: 28 },
            { period: 2, periodType: 'REGULAR', score: 24 },
            { period: 3, periodType: 'REGULAR', score: 0 },
            { period: 4, periodType: 'REGULAR', score: 0 },
          ],
        },
        gameLeaders: {
          homeLeaders: {
            personId: 1629029,
            name: 'Luka Doncic',
            jerseyNum: '77',
            position: 'GF',
            teamTricode: 'DAL',
            playerSlug: 'luka-doncic',
            points: 24,
            rebounds: 7,
            assists: 4,
          },
          awayLeaders: {
            personId: 1628983,
            name: 'Shai Gilgeous-Alexander',
            jerseyNum: '2',
            position: 'GF',
            teamTricode: 'OKC',
            playerSlug: 'shai-gilgeous-alexander',
            points: 15,
            rebounds: 1,
            assists: 2,
          },
        },
        pbOdds: { team: null, odds: 0, suspended: 0 },
      },
      {
        gameId: '0022200403',
        gameCode: '20221212/BKNWAS',
        gameStatus: 3,
        gameStatusText: 'Final',
        period: 4,
        gameClock: '',
        gameTimeUTC: '2022-12-13T00:00:00Z',
        gameEt: '2022-12-12T19:00:00Z',
        regulationPeriods: 4,
        ifNecessary: false,
        seriesGameNumber: '',
        seriesText: '',
        homeTeam: {
          teamId: 1610612764,
          teamName: 'Wizards',
          teamCity: 'Washington',
          teamTricode: 'WAS',
          wins: 11,
          losses: 17,
          score: 100,
          seed: null,
          inBonus: null,
          timeoutsRemaining: 0,
          periods: [
            { period: 1, periodType: 'REGULAR', score: 25 },
            { period: 2, periodType: 'REGULAR', score: 30 },
            { period: 3, periodType: 'REGULAR', score: 28 },
            { period: 4, periodType: 'REGULAR', score: 17 },
          ],
        },
        awayTeam: {
          teamId: 1610612751,
          teamName: 'Nets',
          teamCity: 'Brooklyn',
          teamTricode: 'BKN',
          wins: 17,
          losses: 12,
          score: 112,
          seed: null,
          inBonus: null,
          timeoutsRemaining: 1,
          periods: [
            { period: 1, periodType: 'REGULAR', score: 29 },
            { period: 2, periodType: 'REGULAR', score: 33 },
            { period: 3, periodType: 'REGULAR', score: 32 },
            { period: 4, periodType: 'REGULAR', score: 18 },
          ],
        },
        gameLeaders: {
          homeLeaders: {
            personId: 203115,
            name: 'Will Barton',
            jerseyNum: '5',
            position: 'G',
            teamTricode: 'WAS',
            playerSlug: null,
            points: 22,
            rebounds: 7,
            assists: 7,
          },
          awayLeaders: {
            personId: 201142,
            name: 'Kevin Durant',
            jerseyNum: '7',
            position: 'F',
            teamTricode: 'BKN',
            playerSlug: null,
            points: 30,
            rebounds: 9,
            assists: 6,
          },
        },
        pbOdds: { team: null, odds: 0, suspended: 0 },
      },
      {
        gameId: '0022200408',
        gameCode: '20221212/BOSLAC',
        gameStatus: 1,
        gameStatusText: '10:30 pm ET',
        period: 0,
        gameClock: '',
        gameTimeUTC: '2022-12-13T03:30:00Z',
        gameEt: '2022-12-12T22:30:00Z',
        regulationPeriods: 4,
        ifNecessary: false,
        seriesGameNumber: '',
        seriesText: '',
        homeTeam: {
          teamId: 1610612746,
          teamName: 'Clippers',
          teamCity: 'LA',
          teamTricode: 'LAC',
          wins: 15,
          losses: 13,
          score: 0,
          seed: null,
          inBonus: null,
          timeoutsRemaining: 0,
          periods: [
            { period: 1, periodType: 'REGULAR', score: 0 },
            { period: 2, periodType: 'REGULAR', score: 0 },
            { period: 3, periodType: 'REGULAR', score: 0 },
            { period: 4, periodType: 'REGULAR', score: 0 },
          ],
        },
        awayTeam: {
          teamId: 1610612738,
          teamName: 'Celtics',
          teamCity: 'Boston',
          teamTricode: 'BOS',
          wins: 21,
          losses: 6,
          score: 0,
          seed: null,
          inBonus: null,
          timeoutsRemaining: 0,
          periods: [
            { period: 1, periodType: 'REGULAR', score: 0 },
            { period: 2, periodType: 'REGULAR', score: 0 },
            { period: 3, periodType: 'REGULAR', score: 0 },
            { period: 4, periodType: 'REGULAR', score: 0 },
          ],
        },
        gameLeaders: {
          homeLeaders: {
            personId: 0,
            name: '',
            jerseyNum: '',
            position: '',
            teamTricode: 'LAC',
            playerSlug: null,
            points: 0,
            rebounds: 0,
            assists: 0,
          },
          awayLeaders: {
            personId: 0,
            name: '',
            jerseyNum: '',
            position: '',
            teamTricode: 'BOS',
            playerSlug: null,
            points: 0,
            rebounds: 0,
            assists: 0,
          },
        },
        pbOdds: { team: null, odds: 0, suspended: 0 },
      },
    ],
  },
};

export const gamesHandlers = [
  rest.get<GetGameByIdRes>(
    'http://localhost:3333/api/games/:gameId',
    (req, res, ctx) => {
      const { gameId } = req.params;
      const game = mockGames.scoreboard.games.find(
        (findGame) => findGame.gameId === gameId
      );
      return res(ctx.json(game));
    }
  ),
  rest.get<GetGamesRes>('http://localhost:3333/api/games', (req, res, ctx) => {
    return res(ctx.json(mockGames));
  }),
  rest.post<GetGamesRes>(
    'http://localhost:3333/api/games/getGamesByDate',
    (req, res, ctx) => {
      return res(ctx.json(mockGames));
    }
  ),
];
