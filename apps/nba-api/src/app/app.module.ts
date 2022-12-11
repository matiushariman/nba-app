import { Module } from '@nestjs/common';

import { BoxscoreModule } from './boxscore/boxscore.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [BoxscoreModule, GamesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
