import type { GameLeaderDetailsProps } from './GameLeaderDetails.types';

import PlayerHeadshot from '../../../../../components/PlayerHeadshot';

const GameLeaderDetails = ({
  name,
  jerseyNum,
  teamTricode,
  position,
  personId,
}: GameLeaderDetailsProps) => (
  <div className="flex items-center pt-1 pb-1">
    <div className="mr-2">
      <PlayerHeadshot personId={personId} name={name} />
    </div>
    <div className="grid">
      <p className="text-sm">{name}</p>
      <div>
        <p className="text-xs text-gray-500">
          {teamTricode} | #{jerseyNum} | {position}
        </p>
      </div>
    </div>
  </div>
);

export default GameLeaderDetails;
