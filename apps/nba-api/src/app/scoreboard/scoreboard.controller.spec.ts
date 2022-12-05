import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import type { GetScoreboardRes } from '@nba-app/types-nba';

import { ScoreboardController } from './scoreboard.controller';
import { ScoreboardService } from './scoreboard.service';

describe('ScoreboardController', () => {
  let scoreboard: TestingModule;

  beforeAll(async () => {
    scoreboard = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [ScoreboardController],
      providers: [ScoreboardService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to nba-api!"', async () => {
      const result: GetScoreboardRes = {
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
        .spyOn(scoreboard.get<ScoreboardService>(ScoreboardService), 'getData')
        .mockImplementation(async () => result);

      expect(
        await scoreboard
          .get<ScoreboardController>(ScoreboardController)
          .getData()
      ).toEqual(result);
    });
  });
});
