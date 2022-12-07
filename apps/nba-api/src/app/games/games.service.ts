import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';

import type {
  GetGameByIdRes,
  GetGamesRes,
  GetGameByIdReq,
} from '@nba-app/types-nba';

@Injectable()
export class GamesService {
  constructor(private readonly httpService: HttpService) {}

  async getGames(): Promise<GetGamesRes> {
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

  async getGameById(gameId: GetGameByIdReq['gameId']): Promise<GetGameByIdRes> {
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

    return data.scoreboard.games.find(
      (currentGame) => currentGame.gameId === gameId
    );
  }
}
