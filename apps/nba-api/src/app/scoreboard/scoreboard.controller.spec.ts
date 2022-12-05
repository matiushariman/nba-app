import { Test, TestingModule } from '@nestjs/testing';

import { ScoreboardController } from './scoreboard.controller';
import { ScoreboardService } from './scoreboard.service';

describe('ScoreboardController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ScoreboardController],
      providers: [ScoreboardService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to nba-api!"', () => {
      const appController = app.get<ScoreboardController>(ScoreboardController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to nba-api!',
      });
    });
  });
});
