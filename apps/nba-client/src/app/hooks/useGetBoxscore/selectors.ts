import { GET_BOXSCORE_BY_GAME_ID } from './constants';
import { queryClient } from '../../../main';

import type { GetBoxscoreByGameIdRes } from '@nba-app/types-nba';

const selectBoxscore = () =>
  queryClient.getQueryData<GetBoxscoreByGameIdRes>(GET_BOXSCORE_BY_GAME_ID);

export const selectArena = () => selectBoxscore()?.game.arena;

export const selectGameTime = () => selectBoxscore()?.game.gameTimeUTC;

export const selectPeriod = () => {
  const noOfPeriod = selectBoxscore()?.game.period ?? 1;

  return Array.from(new Array(noOfPeriod), (x, i) => {
    const label = i + 1 <= 4 ? `Q${i + 1}` : `OT${i - 3}`;

    return {
      label,
      period: i + 1,
    };
  });
};

export const selectLinescores = () => {
  const boxScore = selectBoxscore();

  return [
    {
      teamTricode: boxScore?.game.awayTeam.teamTricode ?? '-',
      score: boxScore?.game.awayTeam.score ?? 0,
      periods: boxScore?.game.awayTeam.periods ?? [],
    },
    {
      teamTricode: boxScore?.game.homeTeam.teamTricode ?? '-',
      score: boxScore?.game.homeTeam.score ?? 0,
      periods: boxScore?.game.homeTeam.periods ?? [],
    },
  ];
};
