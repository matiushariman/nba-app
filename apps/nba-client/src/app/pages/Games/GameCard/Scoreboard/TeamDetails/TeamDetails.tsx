import TeamLogo from '../../../../../components/TeamLogo';

import type { TeamDetailsProps } from './TeamDetails.types';

const TeamDetails = ({ teamName, teamId, wins, losses }: TeamDetailsProps) => (
  <div className="grid gap-1">
    <div className="flex justify-around">
      <TeamLogo teamName={teamName} teamId={teamId} />
    </div>
    <div>
      <p className="text-center text-sm">{teamName}</p>
      <p className="text-center text-gray-500 text-sm">{`${wins} - ${losses}`}</p>
    </div>
  </div>
);

export default TeamDetails;
