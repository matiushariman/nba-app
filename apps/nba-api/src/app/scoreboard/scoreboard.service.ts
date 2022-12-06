import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';

import type { GetScoreboardRes } from '@nba-app/types-nba';

@Injectable()
export class ScoreboardService {
  constructor(private readonly httpService: HttpService) {}

  // TODO: improve typings
  async getData(): Promise<GetScoreboardRes> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<GetScoreboardRes>(
          'https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json'
        )
        .pipe(
          catchError(() => {
            throw 'Oops';
          })
        )
    );

    return data;
  }
}
