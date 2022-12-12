import { GET_GAME_BY_ID_QUERY_KEY } from './constants';
import { queryClient } from '../../../main';

import type { GetGameByIdRes } from '@nba-app/types-nba';

export const selectGame = () =>
  queryClient.getQueryData<GetGameByIdRes>(GET_GAME_BY_ID_QUERY_KEY);

export const selectGameLeaders = () => {
  const game = selectGame();

  return game?.gameLeaders;
};
