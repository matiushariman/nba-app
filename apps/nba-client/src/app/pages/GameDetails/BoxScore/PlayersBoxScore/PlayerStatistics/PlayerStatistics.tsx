import {
  getPlayingTime,
  getShootingPercentage,
} from './PlayersStatistics.utils';

import type { PlayersStatisticsProps } from './PlayersStatistics.types';
const PlayerStatistics = ({ statistics, played }: PlayersStatisticsProps) => {
  if (played === '0') {
    return (
      <td colSpan={20} className="pl-4 text-sm">
        DNP
      </td>
    );
  }

  const {
    minutes,
    fieldGoalsMade,
    fieldGoalsAttempted,
    fieldGoalsPercentage,
    threePointersMade,
    threePointersAttempted,
    threePointersPercentage,
    freeThrowsMade,
    freeThrowsAttempted,
    freeThrowsPercentage,
    reboundsOffensive,
    reboundsDefensive,
    reboundsTotal,
    assists,
    steals,
    blocks,
    turnovers,
    foulsPersonal,
    points,
    plusMinusPoints,
  } = statistics;

  return (
    <>
      <td align="right" className="text-sm">
        {getPlayingTime(minutes)}
      </td>
      <td align="right" className="text-sm">
        {fieldGoalsMade}
      </td>
      <td align="right" className="text-sm">
        {fieldGoalsAttempted}
      </td>
      <td align="right" className="text-sm">
        {getShootingPercentage(fieldGoalsPercentage)}
      </td>
      <td align="right" className="text-sm">
        {threePointersMade}
      </td>
      <td align="right" className="text-sm">
        {threePointersAttempted}
      </td>
      <td align="right" className="text-sm">
        {getShootingPercentage(threePointersPercentage)}
      </td>
      <td align="right" className="text-sm">
        {freeThrowsMade}
      </td>
      <td align="right" className="text-sm">
        {freeThrowsAttempted}
      </td>
      <td align="right" className="text-sm">
        {getShootingPercentage(freeThrowsPercentage)}
      </td>
      <td align="right" className="text-sm">
        {reboundsOffensive}
      </td>
      <td align="right" className="text-sm">
        {reboundsDefensive}
      </td>
      <td align="right" className="text-sm">
        {reboundsTotal}
      </td>
      <td align="right" className="text-sm">
        {assists}
      </td>
      <td align="right" className="text-sm">
        {steals}
      </td>
      <td align="right" className="text-sm">
        {blocks}
      </td>
      <td align="right" className="text-sm">
        {turnovers}
      </td>
      <td align="right" className="text-sm">
        {foulsPersonal}
      </td>
      <td align="right" className="text-sm">
        {points}
      </td>
      <td align="right" className="text-sm">
        {plusMinusPoints}
      </td>
    </>
  );
};

export default PlayerStatistics;
