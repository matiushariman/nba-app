import type { GameLeaderDetailsProps } from './GameLeaderDetails.types';

const GameLeaderDetails = ({
  name,
  jerseyNum,
  teamTricode,
  position,
  personId,
}: GameLeaderDetailsProps) => (
  <div className="flex items-center pt-1 pb-1">
    <div className="mr-2 w-[24px] h-[24px]">
      <img
        className="mr-2 bg-gray-300 shadow-sm rounded-full w-full h-full object-cover"
        src={`https://cdn.nba.com/headshots/nba/latest/260x190/${personId}.png`}
        alt={`${name} headshot`}
        loading="lazy"
      />
    </div>
    <div className="grid">
      <p className="text-sm">{name}</p>
      <div className="grid grid-cols-3 divide-x gap-2">
        <p className="text-xs">{teamTricode}</p>
        <p className="text-xs">{`#${jerseyNum}`}</p>
        <p className="text-xs">{position}</p>
      </div>
    </div>
  </div>
);

export default GameLeaderDetails;
