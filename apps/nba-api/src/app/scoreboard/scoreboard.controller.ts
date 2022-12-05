import { Controller, Get } from '@nestjs/common';

import { ScoreboardService } from './scoreboard.service';

@Controller('scoreboard')
export class ScoreboardController {
  constructor(private readonly scoreboardService: ScoreboardService) {}

  @Get()
  getData() {
    return this.scoreboardService.getData();
  }
}
