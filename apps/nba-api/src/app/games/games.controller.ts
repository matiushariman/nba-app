import { Controller, Get, Param } from '@nestjs/common';

import { GamesService } from './games.service';

import type { GetGameByIdReq } from '@nba-app/types-nba';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getGames() {
    return this.gamesService.getGames();
  }

  @Get(':gameId')
  getGameById(@Param() params: GetGameByIdReq) {
    return this.gamesService.getGameById(params.gameId);
  }
}
