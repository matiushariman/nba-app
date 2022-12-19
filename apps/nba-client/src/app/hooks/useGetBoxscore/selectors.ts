import { GET_BOXSCORE_BY_GAME_ID } from './constants';
import { queryClient } from '../../../main';

import type { GetBoxscoreByGameIdRes } from '@nba-app/types-nba';

const selectBoxscore = () =>
  queryClient.getQueryData<GetBoxscoreByGameIdRes>(GET_BOXSCORE_BY_GAME_ID);

export const selectArena = () => selectBoxscore()?.game.arena;

export const selectGameTime = () => selectBoxscore()?.game.gameTimeUTC;

export const selectPeriod = () => {
  const noOfPeriod = selectBoxscore()?.game.period ?? 1;

  return Array.from(new Array(Math.max(noOfPeriod, 4)), (x, i) => {
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

export const selectAwayTeam = () => selectBoxscore()?.game.awayTeam;

export const selectHomeTeam = () => selectBoxscore()?.game.homeTeam;

export const selectInjuredPlayers = () => {
  const boxScore = selectBoxscore();
  const awayTeamInjuredPlayers =
    boxScore?.game.awayTeam.players
      .filter((player) => player.status === 'INACTIVE')
      .map((player) => ({
        ...player,
        teamId: boxScore?.game.awayTeam.teamId,
        teamTricode: boxScore?.game.awayTeam.teamTricode,
      })) ?? [];
  const homeTeamInjuredPlayers =
    boxScore?.game.homeTeam.players
      .filter((player) => player.status === 'INACTIVE')
      .map((player) => ({
        ...player,
        teamId: boxScore?.game.homeTeam.teamId,
        teamTricode: boxScore?.game.homeTeam.teamTricode,
      })) ?? [];

  return [...awayTeamInjuredPlayers, ...homeTeamInjuredPlayers];
};

export const selectGameScore = () => {
  const game = selectBoxscore();

  return {
    awayTeam: {
      score: game?.game.awayTeam.score ?? 0,
      teamId: game?.game.awayTeam.teamId ?? 0,
      teamName: game?.game.awayTeam.teamName ?? '-',
    },
    homeTeam: {
      score: game?.game.homeTeam.score ?? 0,
      teamId: game?.game.homeTeam.teamId ?? 0,
      teamName: game?.game.homeTeam.teamName ?? '-',
    },
    gameStatusText: game?.game.gameStatusText ?? '-',
  };
};
