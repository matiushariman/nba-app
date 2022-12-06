import axios, { AxiosInstance } from 'axios';

import type { GetScoreboardRes } from '@nba-app/types-nba';

export class NbaApi {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    });
  }

  async getScoreboard() {
    return axios.get<GetScoreboardRes>('/api/scoreboard');
  }
}
