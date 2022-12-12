import { rest } from 'msw';
import { GetGamesRes, GetGameByIdRes } from '@nba-app/types-nba';

export const mockGames = {
  meta: {
    version: 1,
    request:
      'https://nba-prod-us-east-1-mediaops-stats.s3.amazonaws.com/NBA/liveData/scoreboard/todaysScoreboard_00.json',
    time: '2022-12-12 01:59:39.5939',
    code: 200,
  },
  scoreboard: {
    gameDate: '2022-12-11',
    leagueId: '00',
    leagueName: 'National Basketball Association',
    games: [
      {
        gameId: '0022200395',
        gameCode: '20221211/PHXNOP',
        gameStatus: 3,
        gameStatusText: 'Final/OT',
        period: 5,
        gameClock: '',
        gameTimeUTC: '2022-12-11T20:30:00Z',
        gameEt: '2022-12-11T15:30:00Z',
        regulationPeriods: 4,
        ifNecessary: false,
        seriesGameNumber: '',
        seriesText: '',
        homeTeam: {
          teamId: 1610612740,
          teamName: 'Pelicans',
          teamCity: 'New Orleans',
          teamTricode: 'NOP',
          wins: 18,
          losses: 8,
          score: 129,
          seed: null,
          inBonus: null,
          timeoutsRemaining: 1,
          periods: [
            {
              period: 1,
              periodType: 'REGULAR',
              score: 29,
            },
            {
              period: 2,
              periodType: 'REGULAR',
              score: 28,
            },
            {
              period: 3,
              periodType: 'REGULAR',
              score: 41,
            },
            {
              period: 4,
              periodType: 'REGULAR',
              score: 19,
            },
            {
              period: 5,
              periodType: 'OVERTIME',
              score: 12,
            },
          ],
        },
        awayTeam: {
          teamId: 1610612756,
          teamName: 'Suns',
          teamCity: 'Phoenix',
          teamTricode: 'PHX',
          wins: 16,
          losses: 11,
          score: 124,
          seed: null,
          inBonus: null,
          timeoutsRemaining: 0,
          periods: [
            {
              period: 1,
              periodType: 'REGULAR',
              score: 36,
            },
            {
              period: 2,
              periodType: 'REGULAR',
              score: 22,
            },
            {
              period: 3,
              periodType: 'REGULAR',
              score: 35,
            },
            {
              period: 4,
              periodType: 'REGULAR',
              score: 24,
            },
            {
              period: 5,
              periodType: 'OVERTIME',
              score: 7,
            },
          ],
        },
        gameLeaders: {
          homeLeaders: {
            personId: 1629627,
            name: 'Zion Williamson',
            jerseyNum: '1',
            position: 'F',
            teamTricode: 'NOP',
            playerSlug: null,
            points: 35,
            rebounds: 8,
            assists: 3,
          },
          awayLeaders: {
            personId: 1629028,
            name: 'Deandre Ayton',
            jerseyNum: '22',
            position: 'C',
            teamTricode: 'PHX',
            playerSlug: null,
            points: 28,
            rebounds: 12,
            assists: 5,
          },
        },
        pbOdds: {
          team: null,
          odds: 0,
          suspended: 0,
        },
      },
    ],
  },
};

export const gamesHandlers = [
  rest.get<GetGameByIdRes>('/api/games/:gameId', (req, res, ctx) => {
    const { gameId } = req.params;
    const game = mockGames.scoreboard.games.find(
      (findGame) => findGame.gameId === gameId
    );
    return res(ctx.json(game));
  }),
  rest.get<GetGamesRes>('/api/games', (req, res, ctx) => {
    return res(ctx.json(mockGames));
  }),
];
