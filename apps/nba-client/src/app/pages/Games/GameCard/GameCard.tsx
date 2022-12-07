import ScoreboardTeamDetails from './ScoreboardTeamDetails';
import Score from './Score';
import GameStatusText from './GameStatusText';

import type { GameCardProps } from './GameCard.types';

const GameCard = ({ homeTeam, awayTeam, gameStatusText }: GameCardProps) => (
  <div className="pt-2 pb-2 pl-4 pr-4 flex gap-2 shadow-md cursor-pointer items-center bg-white rounded">
    <div className="flex gap-3 items-center">
      <ScoreboardTeamDetails
        teamId={awayTeam.teamId}
        teamName={awayTeam.teamName}
        wins={awayTeam.wins}
        losses={awayTeam.losses}
      />
      <Score score={awayTeam.score} />
    </div>
    <div className="flex-grow flex justify-center">
      <GameStatusText gameStatusText={gameStatusText} />
    </div>
    <div className="flex gap-3 items-center">
      <Score score={homeTeam.score} />
      <ScoreboardTeamDetails
        teamId={homeTeam.teamId}
        teamName={homeTeam.teamName}
        wins={homeTeam.wins}
        losses={homeTeam.losses}
      />
    </div>
  </div>
);

export default GameCard;
