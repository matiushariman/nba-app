import { Injectable } from '@nestjs/common';

@Injectable()
export class ScoreboardService {
  getData(): { message: string } {
    return { message: 'Welcome to nba-api!' };
  }
}
