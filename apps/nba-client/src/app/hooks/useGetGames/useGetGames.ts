import { useQuery } from 'react-query';
import dayjs from 'dayjs';

import nbaApi from '../../api';

import type { GetGamesRes } from '@nba-app/types-nba';
import type { UseGetGames } from './useGetGames.types';

export const fetchGames = async (gameDate: string): Promise<GetGamesRes> => {
  const { data } = await nbaApi.getGamesByDate({ gameDate: gameDate });

  return data;
};

const useGetGames = ({ gameDate }: UseGetGames) => {
  return useQuery(['GET_GAMES', gameDate], () =>
    fetchGames(dayjs(gameDate).format('YYYY-MM-DD'))
  );
};

export default useGetGames;
