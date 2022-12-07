import type { TeamDetailsProps } from './TeamDetails.types';

const TeamDetails = ({ teamName, teamId, wins, losses }: TeamDetailsProps) => (
  <div className="grid gap-1 justify-center">
    <img
      src={`https://cdn.nba.com/logos/nba/${teamId}/global/L/logo.svg`}
      loading="lazy"
      width={72}
      height={72}
      alt={`${teamName} logo`}
    />
    <div>
      <p className="text-center">{teamName}</p>
      <p className="text-center text-gray-500 text-sm">{`${wins} - ${losses}`}</p>
    </div>
  </div>
);

export default TeamDetails;
