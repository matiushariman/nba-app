import type { TeamLogoProps } from './TeamLogo.types';

const TeamLogo = ({
  teamId,
  teamName,
  width = 64,
  height = 64,
  mode = 'L',
}: TeamLogoProps) => (
  <img
    src={`https://cdn.nba.com/logos/nba/${teamId}/global/${mode}/logo.svg`}
    loading="lazy"
    width={width}
    height={height}
    alt={`${teamName} logo`}
  />
);

export default TeamLogo;
