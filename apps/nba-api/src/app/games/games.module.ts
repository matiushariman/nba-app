import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { GamesService } from './games.service';
import { GamesController } from './games.controller';

@Module({
  imports: [HttpModule],
  providers: [GamesService],
  controllers: [GamesController],
})
export class GamesModule {}
