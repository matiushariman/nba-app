import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { BoxscoreService } from './boxscore.service';
import { BoxscoreController } from './boxscore.controller';

@Module({
  imports: [HttpModule],
  providers: [BoxscoreService],
  controllers: [BoxscoreController],
})
export class BoxscoreModule {}
