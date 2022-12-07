import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import type { GetGamesRes, GetGameByIdRes } from '@nba-app/types-nba';

import { GamesController } from './games.controller';
import { GamesService } from './games.service';

describe('GamesController', () => {
  let games: TestingModule;

  beforeAll(async () => {
    games = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [GamesController],
      providers: [GamesService],
    }).compile();
  });

  describe('getData', () => {
    it('should return list of games"', async () => {
      const result: GetGamesRes = {
        meta: {
          version: 1,
          request:
            'https://nba-prod-us-east-1-mediaops-stats.s3.amazonaws.com/NBA/liveData/scoreboard/todaysScoreboard_00.json',
          time: '2022-12-05 07:57:39.5739',
          code: 200,
        },
        scoreboard: {
          gameDate: '2022-12-04',
          leagueId: '00',
          leagueName: 'National Basketball Association',
          games: [],
        },
      };

      jest
        .spyOn(games.get<GamesService>(GamesService), 'getGames')
        .mockImplementation(async () => result);

      expect(
        await games.get<GamesController>(GamesController).getGames()
      ).toEqual(result);
    });

    it('should return a games"', async () => {
      const result: GetGameByIdRes = {
        gameId: '0022200360',
        gameCode: '20221206/LALCLE',
        gameStatus: 3,
        gameStatusText: 'Final',
        period: 4,
        gameClock: '',
        gameTimeUTC: '2022-12-07T00:30:00Z',
        gameEt: '2022-12-06T19:30:00Z',
        regulationPeriods: 4,
        ifNecessary: false,
        seriesGameNumber: '',
        seriesText: '',
        homeTeam: {
          teamId: 1610612739,
          teamName: 'Cavaliers',
          teamCity: 'Cleveland',
          teamTricode: 'CLE',
          wins: 16,
          losses: 9,
          score: 116,
          seed: null,
          inBonus: null,
          timeoutsRemaining: 0,
          periods: [
            { period: 1, periodType: 'REGULAR', score: 27 },
            { period: 2, periodType: 'REGULAR', score: 30 },
            { period: 3, periodType: 'REGULAR', score: 28 },
            { period: 4, periodType: 'REGULAR', score: 31 },
          ],
        },
        awayTeam: {
          teamId: 1610612747,
          teamName: 'Lakers',
          teamCity: 'Los Angeles',
          teamTricode: 'LAL',
          wins: 10,
          losses: 13,
          score: 102,
          seed: null,
          inBonus: null,
          timeoutsRemaining: 0,
          periods: [
            { period: 1, periodType: 'REGULAR', score: 26 },
            { period: 2, periodType: 'REGULAR', score: 23 },
            { period: 3, periodType: 'REGULAR', score: 34 },
            { period: 4, periodType: 'REGULAR', score: 19 },
          ],
        },
        gameLeaders: {
          homeLeaders: {
            personId: 1628378,
            name: 'Donovan Mitchell',
            jerseyNum: '45',
            position: 'G',
            teamTricode: 'CLE',
            playerSlug: null,
            points: 43,
            rebounds: 6,
            assists: 5,
          },
          awayLeaders: {
            personId: 2544,
            name: 'LeBron James',
            jerseyNum: '6',
            position: 'F',
            teamTricode: 'LAL',
            playerSlug: null,
            points: 21,
            rebounds: 17,
            assists: 4,
          },
        },
        pbOdds: { team: null, odds: 0, suspended: 0 },
      };

      jest
        .spyOn(games.get<GamesService>(GamesService), 'getGameById')
        .mockImplementation(async () => result);

      expect(
        await games
          .get<GamesController>(GamesController)
          .getGameById('0022200360')
      ).toEqual(result);
    });
  });
});
