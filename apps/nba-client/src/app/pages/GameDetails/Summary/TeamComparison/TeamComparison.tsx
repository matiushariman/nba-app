import TeamStats from './TeamStats';
import {
  getFieldGoalStats,
  getThreePtStats,
  getFreeThrowStats,
  getAssistsStats,
  getReboundsStats,
  getFastBreakPtsStats,
  getDefReboundsStats,
  getOffReboundsStats,
  getStealsStats,
  getBlocksStats,
  getPtsOffTurnoversStats,
} from './TeamComparison.utils';
import { Card } from '../../../../components/ui';
import {
  selectAwayTeam,
  selectHomeTeam,
} from '../../../../hooks/useGetBoxscore';

const TeamComparison = () => {
  const awayTeam = selectAwayTeam();
  const homeTeam = selectHomeTeam();

  if (!awayTeam || !homeTeam) {
    return null;
  }

  return (
    <Card className="p-5 grid gap-3 divide-y">
      <div>
        <p className="text-2xl font-bold uppercase">Team Comparison</p>
      </div>
      <div className="pt-5 grid grid-cols-2 gap-4 md:gap-6">
        <div>
          <TeamStats {...getFieldGoalStats(awayTeam, homeTeam)} />
        </div>
        <div>
          <TeamStats {...getThreePtStats(awayTeam, homeTeam)} />
        </div>
        <div>
          <TeamStats {...getFreeThrowStats(awayTeam, homeTeam)} />
        </div>
        <div>
          <TeamStats {...getAssistsStats(awayTeam, homeTeam)} />
        </div>
        <div>
          <TeamStats {...getReboundsStats(awayTeam, homeTeam)} />
        </div>
        <div>
          <TeamStats {...getDefReboundsStats(awayTeam, homeTeam)} />
        </div>
        <div>
          <TeamStats {...getOffReboundsStats(awayTeam, homeTeam)} />
        </div>
        <div>
          <TeamStats {...getFastBreakPtsStats(awayTeam, homeTeam)} />
        </div>
        <div>
          <TeamStats {...getStealsStats(awayTeam, homeTeam)} />
        </div>
        <div>
          <TeamStats {...getBlocksStats(awayTeam, homeTeam)} />
        </div>
        <div>
          <TeamStats {...getPtsOffTurnoversStats(awayTeam, homeTeam)} />
        </div>
      </div>
    </Card>
  );
};

export default TeamComparison;
