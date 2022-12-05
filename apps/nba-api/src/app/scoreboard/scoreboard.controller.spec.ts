import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

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
      const result = ['abc'];
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
