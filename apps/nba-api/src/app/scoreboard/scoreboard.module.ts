import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { ScoreboardService } from './scoreboard.service';
import { ScoreboardController } from './scoreboard.controller';

@Module({
  imports: [HttpModule],
  providers: [ScoreboardService],
  controllers: [ScoreboardController],
})
export class ScoreboardModule {}
