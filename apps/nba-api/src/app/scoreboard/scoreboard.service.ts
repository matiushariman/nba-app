import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class ScoreboardService {
  constructor(private readonly httpService: HttpService) {}

  // TODO: improve typings
  async getData(): Promise<string[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<string[]>(
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
