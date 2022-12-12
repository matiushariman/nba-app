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
      secondaryText: `${homeTeamFgPercentage.toFixed(1)}%`,
      primaryText: `${homeTeam.statistics.fieldGoalsMade}/${homeTeam.statistics.fieldGoalsAttempted}`,
    },
    awayTeam: {
      teamTricode: awayTeam.teamTricode,
      percentage: awayTeamFgPercentage,
      secondaryText: `${awayTeamFgPercentage.toFixed(1)}%`,
      primaryText: `${awayTeam.statistics.fieldGoalsMade}/${awayTeam.statistics.fieldGoalsAttempted}`,
    },
  };
};

export const getThreePtStats = (
  awayTeam: BoxscoreTeam,
  homeTeam: BoxscoreTeam
): TeamStatsProps => {
  const homeTeamFgPercentage = getPercentage(
    homeTeam.statistics.threePointersPercentage
  );
  const awayTeamFgPercentage = getPercentage(
    awayTeam.statistics.threePointersPercentage
  );

  return {
    label: '3-Pointers',
    homeTeam: {
      teamTricode: homeTeam.teamTricode,
      percentage: homeTeamFgPercentage,
      secondaryText: `${homeTeamFgPercentage.toFixed(1)}%`,
      primaryText: `${homeTeam.statistics.threePointersMade}/${homeTeam.statistics.threePointersAttempted}`,
    },
    awayTeam: {
      teamTricode: awayTeam.teamTricode,
      percentage: awayTeamFgPercentage,
      secondaryText: `${awayTeamFgPercentage.toFixed(1)}%`,
      primaryText: `${awayTeam.statistics.threePointersMade}/${awayTeam.statistics.threePointersAttempted}`,
    },
  };
};

export const getFreeThrowStats = (
  awayTeam: BoxscoreTeam,
  homeTeam: BoxscoreTeam
): TeamStatsProps => {
  const homeTeamFgPercentage = getPercentage(
    homeTeam.statistics.freeThrowsPercentage
  );
  const awayTeamFgPercentage = getPercentage(
    awayTeam.statistics.freeThrowsPercentage
  );

  return {
    label: 'Free Throws',
    homeTeam: {
      teamTricode: homeTeam.teamTricode,
      percentage: homeTeamFgPercentage,
      secondaryText: `${homeTeamFgPercentage.toFixed(1)}%`,
      primaryText: `${homeTeam.statistics.freeThrowsMade}/${homeTeam.statistics.freeThrowsAttempted}`,
    },
    awayTeam: {
      teamTricode: awayTeam.teamTricode,
      percentage: awayTeamFgPercentage,
      secondaryText: `${awayTeamFgPercentage.toFixed(1)}%`,
      primaryText: `${awayTeam.statistics.freeThrowsMade}/${awayTeam.statistics.freeThrowsAttempted}`,
    },
  };
};

export const getAssistsStats = (
  awayTeam: BoxscoreTeam,
  homeTeam: BoxscoreTeam
): TeamStatsProps => {
  const maxAssists = Math.max(
    awayTeam.statistics.assists,
    homeTeam.statistics.assists
  );

  const homeTeamAstsPercentage = getPercentage(
    homeTeam.statistics.assists / maxAssists
  );
  const awayTeamAstsPercentage = getPercentage(
    awayTeam.statistics.assists / maxAssists
  );

  return {
    label: 'Assists',
    homeTeam: {
      teamTricode: homeTeam.teamTricode,
      percentage: homeTeamAstsPercentage,
      primaryText: homeTeam.statistics.assists,
    },
    awayTeam: {
      teamTricode: awayTeam.teamTricode,
      percentage: awayTeamAstsPercentage,
      primaryText: awayTeam.statistics.assists,
    },
  };
};

export const getReboundsStats = (
  awayTeam: BoxscoreTeam,
  homeTeam: BoxscoreTeam
): TeamStatsProps => {
  const maxRebounds = Math.max(
    awayTeam.statistics.reboundsPersonal,
    homeTeam.statistics.reboundsPersonal
  );

  const homeTeamRebsPercentage = getPercentage(
    homeTeam.statistics.reboundsPersonal / maxRebounds
  );
  const awayTeamRebsPercentage = getPercentage(
    awayTeam.statistics.reboundsPersonal / maxRebounds
  );

  return {
    label: 'Total Rebounds',
    homeTeam: {
      teamTricode: homeTeam.teamTricode,
      percentage: homeTeamRebsPercentage,
      primaryText: homeTeam.statistics.reboundsPersonal,
    },
    awayTeam: {
      teamTricode: awayTeam.teamTricode,
      percentage: awayTeamRebsPercentage,
      primaryText: awayTeam.statistics.reboundsPersonal,
    },
  };
};

export const getDefReboundsStats = (
  awayTeam: BoxscoreTeam,
  homeTeam: BoxscoreTeam
): TeamStatsProps => {
  const maxRebounds = Math.max(
    awayTeam.statistics.reboundsDefensive,
    homeTeam.statistics.reboundsDefensive
  );

  const homeTeamRebsPercentage = getPercentage(
    homeTeam.statistics.reboundsDefensive / maxRebounds
  );
  const awayTeamRebsPercentage = getPercentage(
    awayTeam.statistics.reboundsDefensive / maxRebounds
  );

  return {
    label: 'Defensive Rebounds',
    homeTeam: {
      teamTricode: homeTeam.teamTricode,
      percentage: homeTeamRebsPercentage,
      primaryText: homeTeam.statistics.reboundsDefensive,
    },
    awayTeam: {
      teamTricode: awayTeam.teamTricode,
      percentage: awayTeamRebsPercentage,
      primaryText: awayTeam.statistics.reboundsDefensive,
    },
  };
};

export const getOffReboundsStats = (
  awayTeam: BoxscoreTeam,
  homeTeam: BoxscoreTeam
): TeamStatsProps => {
  const maxRebounds = Math.max(
    awayTeam.statistics.reboundsOffensive,
    homeTeam.statistics.reboundsOffensive
  );

  const homeTeamRebsPercentage = getPercentage(
    homeTeam.statistics.reboundsOffensive / maxRebounds
  );
  const awayTeamRebsPercentage = getPercentage(
    awayTeam.statistics.reboundsOffensive / maxRebounds
  );

  return {
    label: 'Offensive Rebounds',
    homeTeam: {
      teamTricode: homeTeam.teamTricode,
      percentage: homeTeamRebsPercentage,
      primaryText: homeTeam.statistics.reboundsOffensive,
    },
    awayTeam: {
      teamTricode: awayTeam.teamTricode,
      percentage: awayTeamRebsPercentage,
      primaryText: awayTeam.statistics.reboundsOffensive,
    },
  };
};

export const getFastBreakPtsStats = (
  awayTeam: BoxscoreTeam,
  homeTeam: BoxscoreTeam
): TeamStatsProps => {
  const maxFastBreakPts = Math.max(
    awayTeam.statistics.fastBreakPointsMade,
    homeTeam.statistics.fastBreakPointsMade
  );

  const homeTeamFastBreakPtsPercentage = getPercentage(
    homeTeam.statistics.fastBreakPointsMade / maxFastBreakPts
  );
  const awayTeamFastBreakPtsPercentage = getPercentage(
    awayTeam.statistics.fastBreakPointsMade / maxFastBreakPts
  );

  return {
    label: 'Fast Break Points',
    homeTeam: {
      teamTricode: homeTeam.teamTricode,
      percentage: homeTeamFastBreakPtsPercentage,
      primaryText: homeTeam.statistics.fastBreakPointsMade,
    },
    awayTeam: {
      teamTricode: awayTeam.teamTricode,
      percentage: awayTeamFastBreakPtsPercentage,
      primaryText: awayTeam.statistics.fastBreakPointsMade,
    },
  };
};

export const getStealsStats = (
  awayTeam: BoxscoreTeam,
  homeTeam: BoxscoreTeam
): TeamStatsProps => {
  const maxSteals = Math.max(
    awayTeam.statistics.steals,
    homeTeam.statistics.steals
  );

  const homeStealsPercentage = getPercentage(
    homeTeam.statistics.steals / maxSteals
  );
  const awayStealsPercentage = getPercentage(
    awayTeam.statistics.steals / maxSteals
  );

  return {
    label: 'Steals',
    homeTeam: {
      teamTricode: homeTeam.teamTricode,
      percentage: homeStealsPercentage,
      primaryText: homeTeam.statistics.steals,
    },
    awayTeam: {
      teamTricode: awayTeam.teamTricode,
      percentage: awayStealsPercentage,
      primaryText: awayTeam.statistics.steals,
    },
  };
};

export const getBlocksStats = (
  awayTeam: BoxscoreTeam,
  homeTeam: BoxscoreTeam
): TeamStatsProps => {
  const maxBlocks = Math.max(
    awayTeam.statistics.blocks,
    homeTeam.statistics.blocks
  );

  const homeBlocksPercentage = getPercentage(
    homeTeam.statistics.blocks / maxBlocks
  );
  const awayBlocksPercentage = getPercentage(
    awayTeam.statistics.blocks / maxBlocks
  );

  return {
    label: 'Blocks',
    homeTeam: {
      teamTricode: homeTeam.teamTricode,
      percentage: homeBlocksPercentage,
      primaryText: homeTeam.statistics.blocks,
    },
    awayTeam: {
      teamTricode: awayTeam.teamTricode,
      percentage: awayBlocksPercentage,
      primaryText: awayTeam.statistics.blocks,
    },
  };
};

export const getPtsOffTurnoversStats = (
  awayTeam: BoxscoreTeam,
  homeTeam: BoxscoreTeam
): TeamStatsProps => {
  const maxPtsOffTurnovers = Math.max(
    awayTeam.statistics.pointsFromTurnovers,
    homeTeam.statistics.pointsFromTurnovers
  );

  const homePtsOffTurnoversPercentage = getPercentage(
    homeTeam.statistics.pointsFromTurnovers / maxPtsOffTurnovers
  );
  const awayPtsOffTurnoversPercentage = getPercentage(
    awayTeam.statistics.pointsFromTurnovers / maxPtsOffTurnovers
  );

  return {
    label: 'Points Off Turnovers',
    homeTeam: {
      teamTricode: homeTeam.teamTricode,
      percentage: homePtsOffTurnoversPercentage,
      primaryText: homeTeam.statistics.pointsFromTurnovers,
    },
    awayTeam: {
      teamTricode: awayTeam.teamTricode,
      percentage: awayPtsOffTurnoversPercentage,
      primaryText: awayTeam.statistics.pointsFromTurnovers,
    },
  };
};
