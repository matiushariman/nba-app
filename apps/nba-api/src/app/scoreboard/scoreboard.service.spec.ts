import { Test } from '@nestjs/testing';

import { ScoreboardService } from './scoreboard.service';

describe('ScoreboardService', () => {
  let service: ScoreboardService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ScoreboardService],
    }).compile();

    service = app.get<ScoreboardService>(ScoreboardService);
  });

  describe('getData', () => {
    it('should return "Welcome to nba-api!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to nba-api!' });
    });
  });
});
