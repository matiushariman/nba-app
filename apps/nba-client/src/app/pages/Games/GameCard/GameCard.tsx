import Scoreboard from './Scoreboard';
import GameLeaders from './GameLeaders';

import type { GameCardProps } from './GameCard.types';

const GameCard = ({
  homeTeam,
  awayTeam,
  gameStatusText,
  gameLeaders,
  gameId,
}: GameCardProps) => (
  <div className="flex shadow-md items-stretch bg-white rounded md:divide-x">
    <div className="flex flex-col flex-grow md:w-[60%] md:flex-grow-0">
      <Scoreboard
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        gameStatusText={gameStatusText}
        gameId={gameId}
      />
    </div>
    <div className="md:flex-grow hidden md:block">
      <GameLeaders gameLeaders={gameLeaders} />
    </div>
  </div>
);

export default GameCard;
