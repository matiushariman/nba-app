import type { BoxscoreTeam } from '@nba-app/types-nba';
import type { TeamStatsProps } from './TeamStats/TeamStats.types';

export const getPercentage = (num: number) => num * 100;

export const getFieldGoalStats = (
  awayTeam: BoxscoreTeam,
  homeTeam: BoxscoreTeam
): TeamStatsProps => {
  const homeTeamFgPercentage = getPercentage(
    homeTeam.statistics.fieldGoalsPercentage
  );
  const awayTeamFgPercentage = getPercentage(
    awayTeam.statistics.fieldGoalsPercentage
  );

  return {
    label: 'Field Goals',
    homeTeam: {
      teamTricode: homeTeam.teamTricode,
      percentage: homeTeamFgPercentage,
      secondaryText: `${homeTeamFgPercentage.toFixed(2)}%`,
      primaryText: `${homeTeam.statistics.fieldGoalsMade}/${homeTeam.statistics.fieldGoalsAttempted}`,
    },
    awayTeam: {
      teamTricode: awayTeam.teamTricode,
      percentage: awayTeamFgPercentage,
      secondaryText: `${awayTeamFgPercentage.toFixed(2)}%`,
      primaryText: `${awayTeam.statistics.fieldGoalsMade}/${awayTeam.statistics.fieldGoalsAttempted}`,
    },
  };
};
