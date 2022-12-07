import axios, { AxiosInstance } from 'axios';

import type { GetGamesRes, GetGameByIdRes } from '@nba-app/types-nba';

export class NbaApi {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    });
  }

  async getGames() {
    return axios.get<GetGamesRes>('/api/games');
  }

  async getGameById(id: string) {
    return axios.get<GetGameByIdRes>(`/api/games/${id}`);
  }
}
