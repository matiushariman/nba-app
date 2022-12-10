import { useNavigate } from 'react-router-dom';

import TeamDetails from './TeamDetails';
import Score from './Score';
import GameStatusText from '../../../../components/GameStatusTextWithContext';

import type { ScoreboardProps } from './Scoreboard.types';

const Scoreboard = ({ awayTeam, homeTeam, gameId }: ScoreboardProps) => {
  const navigate = useNavigate();

  const navigateToGameDetails = () => navigate(`game-details/${gameId}`);

  return (
    <div className="flex-grow flex flex-col divide-y">
      <div className="pt-2 pb-2 pl-4 pr-4 flex gap-2 items-center flex-grow">
        <div className="flex gap-3 items-center">
          <TeamDetails
            teamId={awayTeam.teamId}
            teamName={awayTeam.teamName}
            wins={awayTeam.wins}
            losses={awayTeam.losses}
          />
          <Score score={awayTeam.score} />
        </div>
        <div className="flex-grow flex justify-center">
          <GameStatusText />
        </div>
        <div className="flex gap-3 items-center">
          <Score score={homeTeam.score} />
          <TeamDetails
            teamId={homeTeam.teamId}
            teamName={homeTeam.teamName}
            wins={homeTeam.wins}
            losses={homeTeam.losses}
          />
        </div>
      </div>
      <div
        onClick={navigateToGameDetails}
        role="button"
        className="hidden text-center flex items-center justify-center pt-2 pb-2 pl-4 pr-4 uppercase text-sm font-bold text-gray-800 bg-gray-50"
      >
        Game Details
      </div>
    </div>
  );
};

export default Scoreboard;
