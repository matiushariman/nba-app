import { Controller, Get, Param } from '@nestjs/common';

import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getGames() {
    return this.gamesService.getGames();
  }

  @Get(':id')
  getGameById(@Param() params) {
    return this.gamesService.getGameById(params.id);
  }
}
