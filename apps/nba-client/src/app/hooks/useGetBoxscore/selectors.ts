import { GET_BOXSCORE_BY_GAME_ID } from './constants';
import { queryClient } from '../../../main';

import type { GetBoxscoreByGameIdRes } from '@nba-app/types-nba';

const selectBoxscore = () =>
  queryClient.getQueryData<GetBoxscoreByGameIdRes>(GET_BOXSCORE_BY_GAME_ID);

export const selectArena = () => selectBoxscore()?.game.arena;

export const selectGameTime = () => selectBoxscore()?.game.gameTimeUTC;
