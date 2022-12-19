import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';

import type {
  GetGameByIdRes,
  GetGamesRes,
  GetGameByIdReq,
  GetGamesByDateRes,
  GetGamesByDateReq,
} from '@nba-app/types-nba';
import { generateGamesResponse } from './games.utils';

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

  async getGamesByDate({ gameDate }: GetGamesByDateReq): Promise<GetGamesRes> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<GetGamesByDateRes>(
          `https://sg.global.nba.com/stats2/scores/daily.json?gameDate=${gameDate}`
        )
        .pipe(
          catchError(() => {
            throw 'Oops';
          })
        )
    );

    return generateGamesResponse(gameDate, data);
  }
}
