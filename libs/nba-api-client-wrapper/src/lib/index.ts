import axios, { AxiosInstance } from 'axios';

import type {
  GetGamesRes,
  GetGameByIdRes,
  GetGameByIdReq,
  GetBoxscoreByGameIdReq,
  GetBoxscoreByGameIdRes,
  GetGamesByDateReq,
} from '@nba-app/types-nba';

export class NbaApi {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    });
  }

  async getGames() {
    return this.axiosInstance.get<GetGamesRes>('/api/games');
  }

  async getGameById(id: GetGameByIdReq['gameId']) {
    return this.axiosInstance
      .get<GetGameByIdRes>(`/api/games/${id}`)
      .catch((err) => err);
  }

  async getBoxscoreByGameId(gameId: GetBoxscoreByGameIdReq['gameId']) {
    return this.axiosInstance
      .get<GetBoxscoreByGameIdRes>(`/api/boxscore/${gameId}`)
      .catch((err) => err);
  }

  async getGamesByDate(reqPayload: GetGamesByDateReq) {
    return this.axiosInstance
      .post<GetGamesRes>('/api/games/getGamesByDate', reqPayload)
      .catch((err) => err);
  }
}
