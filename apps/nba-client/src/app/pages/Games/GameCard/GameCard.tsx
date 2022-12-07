import Scoreboard from './Scoreboard';
import GameLeaders from './GameLeaders';

import type { GameCardProps } from './GameCard.types';

const GameCard = ({
  homeTeam,
  awayTeam,
  gameStatusText,
  gameLeaders,
}: GameCardProps) => (
  <div className="flex shadow-md cursor-pointer items-center bg-white rounded divide-x items-center">
    <div className="w-[60%]">
      <Scoreboard
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        gameStatusText={gameStatusText}
      />
    </div>
    <div className="flex-grow">
      <GameLeaders gameLeaders={gameLeaders} />
    </div>
  </div>
);

export default GameCard;
