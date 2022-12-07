import axios, { AxiosInstance } from 'axios';

import type { GetGamesRes } from '@nba-app/types-nba';

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
}
