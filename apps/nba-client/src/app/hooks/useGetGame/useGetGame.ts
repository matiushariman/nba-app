import { useQuery } from 'react-query';

import nbaApi from '../../api';

import type { GetGameByIdReq } from '@nba-app/types-nba';

export const fetchGameById = async (gameId: GetGameByIdReq['gameId']) => {
  const { data } = await nbaApi.getGameById(gameId);

  return data;
};

const useGetGame = ({ gameId }: GetGameByIdReq) => {
  return useQuery('GET_GAME_BY_ID', () => fetchGameById(gameId), {
    cacheTime: 0,
  });
};

export default useGetGame;
