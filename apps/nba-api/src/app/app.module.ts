import { Module } from '@nestjs/common';

import { ScoreboardModule } from './scoreboard/scoreboard.module';

@Module({
  imports: [ScoreboardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
