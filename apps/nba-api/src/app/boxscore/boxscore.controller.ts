import { Controller, Get, Param } from '@nestjs/common';

import { BoxscoreService } from './boxscore.service';

import type { GetBoxscoreByGameIdReq } from '@nba-app/types-nba';

@Controller('boxscore')
export class BoxscoreController {
  constructor(private readonly boxscoreService: BoxscoreService) {}

  @Get(':gameId')
  getBoxscoreByGameId(@Param() params: GetBoxscoreByGameIdReq) {
    return this.boxscoreService.getBoxscoreByGameId(params.gameId);
  }
}
