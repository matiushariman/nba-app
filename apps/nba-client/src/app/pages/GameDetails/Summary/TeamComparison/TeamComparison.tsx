import TeamStats from './TeamStats';
import { getFieldGoalStats } from './TeamComparison.utils';
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
      <div className="pt-5 grid grid-cols-2 gap-4">
        <div>
          <TeamStats {...getFieldGoalStats(awayTeam, homeTeam)} />
        </div>
      </div>
    </Card>
  );
};

export default TeamComparison;
