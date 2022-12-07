import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import type { GetGamesRes } from '@nba-app/types-nba';

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
        .spyOn(games.get<GamesService>(GamesService), 'getData')
        .mockImplementation(async () => result);

      expect(
        await games.get<GamesController>(GamesController).getData()
      ).toEqual(result);
    });
  });
});
