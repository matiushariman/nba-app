import Scoreboard from './Scoreboard';
import GameLeaders from './GameLeaders';

import type { GameCardProps } from './GameCard.types';

const GameCard = ({
  homeTeam,
  awayTeam,
  gameStatusText,
  gameLeaders,
}: GameCardProps) => (
  <div className="flex shadow-md cursor-pointer items-center bg-white rounded md:divide-x items-center">
    <div className="flex-grow md:w-[60%] md:flex-grow-0">
      <Scoreboard
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        gameStatusText={gameStatusText}
      />
    </div>
    <div className="md:flex-grow hidden md:block">
      <GameLeaders gameLeaders={gameLeaders} />
    </div>
  </div>
);

export default GameCard;
