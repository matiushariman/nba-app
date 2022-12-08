import { useQuery } from 'react-query';

import { GET_GAME_BY_ID_QUERY_KEY } from './constants';
import nbaApi from '../../api';

import type { GetGameByIdReq } from '@nba-app/types-nba';

export const fetchGameById = async (gameId: GetGameByIdReq['gameId']) => {
  const { data } = await nbaApi.getGameById(gameId);

  return data;
};

const useGetGame = ({ gameId }: GetGameByIdReq) => {
  return useQuery(GET_GAME_BY_ID_QUERY_KEY, () => fetchGameById(gameId), {
    cacheTime: 0,
  });
};

export default useGetGame;
