import Scoreboard from './Scoreboard';
import GameLeaders from './GameLeaders';
import { GameStatusProvider } from '../../../context/GameStatusContext';
import type { GameCardProps } from './GameCard.types';

const GameCard = ({
  homeTeam,
  awayTeam,
  gameStatusText,
  gameStatus,
  gameLeaders,
  gameId,
}: GameCardProps) => (
  <GameStatusProvider gameStatus={gameStatus} gameStatusText={gameStatusText}>
    <div className="flex shadow-md items-stretch bg-white rounded md:divide-x">
      <div className="flex flex-col flex-grow md:w-[60%] md:flex-grow-0">
        <Scoreboard homeTeam={homeTeam} awayTeam={awayTeam} gameId={gameId} />
      </div>
      <div className="md:flex-grow hidden md:block">
        <GameLeaders gameLeaders={gameLeaders} />
      </div>
    </div>
  </GameStatusProvider>
);

export default GameCard;
