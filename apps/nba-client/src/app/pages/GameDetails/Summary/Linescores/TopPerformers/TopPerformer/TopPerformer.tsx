import type { TopPerformerProps } from './TopPerformer.types';

import TopPerformerStats from './TopPerformerStats';
import PlayerHeadshot from '../../../../../../components/PlayerHeadshot';

const TopPerformer = ({
  personId,
  name,
  teamTricode,
  jerseyNum,
  position,
  points,
  rebounds,
  assists,
}: TopPerformerProps) => (
  <div className="flex items-center">
    <div className="flex flex-col items-center gap-1 w-[115px]">
      <div>
        <PlayerHeadshot personId={personId} name={'name'} size="md" />
      </div>
      <div>
        <p className="text-sm text-center">{name}</p>
        <p className="text-xs text-gray-500 text-center">{`${teamTricode} | #${jerseyNum} | ${position}`}</p>
      </div>
    </div>
    <div className="grid grid-cols-3 flex-grow">
      <div>
        <TopPerformerStats label="Pts" value={points} />
      </div>
      <div>
        <TopPerformerStats label="Reb" value={rebounds} />
      </div>
      <div>
        <TopPerformerStats label="Ast" value={assists} />
      </div>
    </div>
  </div>
);

export default TopPerformer;
