import { Controller, Get, Param, Post, Body } from '@nestjs/common';

import { GamesService } from './games.service';
import { GetGamesByDateReqDto } from './games.dto';

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

  @Post('getGamesByDate')
  getGamesByDate(@Body() reqBody: GetGamesByDateReqDto) {
    return this.gamesService.getGamesByDate(reqBody);
  }
}
