import type { PlayerHeadshotProps } from './PlayerHeadshot.types';

const SIZE_CHART = {
  sm: 'w-[24px] h-[24px]',
  md: 'w-[48px] h-[48px]',
};

const PlayerHeadshot = ({
  name,
  personId,
  size = 'sm',
}: PlayerHeadshotProps) => (
  <div className={SIZE_CHART[size]}>
    <img
      className="mr-2 bg-gray-300 shadow-sm rounded-full w-full h-full object-cover"
      src={`https://cdn.nba.com/headshots/nba/latest/260x190/${personId}.png`}
      alt={`${name} headshot`}
      loading="lazy"
    />
  </div>
);

export default PlayerHeadshot;
