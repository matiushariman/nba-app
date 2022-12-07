import Scoreboard from './Scoreboard';
import type { GameCardProps } from './GameCard.types';

const GameCard = ({ homeTeam, awayTeam, gameStatusText }: GameCardProps) => (
  <div className="shadow-md cursor-pointer items-center bg-white rounded">
    <Scoreboard
      homeTeam={homeTeam}
      awayTeam={awayTeam}
      gameStatusText={gameStatusText}
    />
  </div>
);

export default GameCard;
