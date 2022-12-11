import { useQuery } from 'react-query';

import { GET_BOXSCORE_BY_GAME_ID } from './constants';
import nbaApi from '../../api';

import type { GetBoxscoreByGameIdReq } from '@nba-app/types-nba';

export const fetchBoxscoreByGameId = async (
  gameId: GetBoxscoreByGameIdReq['gameId']
) => {
  const { data } = await nbaApi.getBoxscoreByGameId(gameId);

  return data;
};

const useGetBoxscore = ({ gameId }: GetBoxscoreByGameIdReq) => {
  return useQuery(
    GET_BOXSCORE_BY_GAME_ID,
    () => fetchBoxscoreByGameId(gameId),
    {
      cacheTime: 0,
    }
  );
};

export default useGetBoxscore;
