import TopPerformer from './TopPerformer';
import { selectGameLeaders } from '../../../../../hooks/useGetGame';

const TopPerformers = () => {
  const gameLeaders = selectGameLeaders();

  if (!gameLeaders) {
    return <p>-</p>;
  }

  const { awayLeaders, homeLeaders } = gameLeaders;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <TopPerformer
        personId={awayLeaders.personId}
        name={awayLeaders.name}
        jerseyNum={awayLeaders.jerseyNum}
        teamTricode={awayLeaders.teamTricode}
        position={awayLeaders.position}
        points={awayLeaders.points}
        rebounds={awayLeaders.rebounds}
        assists={awayLeaders.assists}
      />
      <TopPerformer
        personId={homeLeaders.personId}
        name={homeLeaders.name}
        jerseyNum={homeLeaders.jerseyNum}
        teamTricode={homeLeaders.teamTricode}
        position={homeLeaders.position}
        points={homeLeaders.points}
        rebounds={homeLeaders.rebounds}
        assists={homeLeaders.assists}
      />
    </div>
  );
};

export default TopPerformers;
