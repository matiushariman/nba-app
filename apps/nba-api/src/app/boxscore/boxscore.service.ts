import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';

import type {
  GetBoxscoreByGameIdRes,
  GetBoxscoreByGameIdReq,
} from '@nba-app/types-nba';

@Injectable()
export class BoxscoreService {
  constructor(private readonly httpService: HttpService) {}

  async getBoxscoreByGameId(
    gameId: GetBoxscoreByGameIdReq['gameId']
  ): Promise<GetBoxscoreByGameIdRes> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<GetBoxscoreByGameIdRes>(
          `https://cdn.nba.com/static/json/liveData/boxscore/boxscore_${gameId}.json`
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
