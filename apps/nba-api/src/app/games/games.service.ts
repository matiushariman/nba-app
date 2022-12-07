import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';

import type { GetGamesRes } from '@nba-app/types-nba';

@Injectable()
export class GamesService {
  constructor(private readonly httpService: HttpService) {}

  async getData(): Promise<GetGamesRes> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<GetGamesRes>(
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
