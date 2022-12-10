import LiveStatus from './LiveStatus';
import { useGameStatusContext } from '../../context/GameStatusContext';

const GameStatusText = () => {
  const { isLiveGame, gameStatusText } = useGameStatusContext();

  if (!isLiveGame) {
    return <p className="text-xs uppercase font-bold">{gameStatusText}</p>;
  }

  // get Q# and time remaining from text
  const gameStatus = gameStatusText.split(' ');

  return (
    <div className="flex flex-col items-center gap-1">
      <div>
        <LiveStatus />
      </div>
      <div className="flex items-center gap-1">
        <p className="text-xs uppercase font-bold">{gameStatus[0]}</p>
        <p className="text-xs">{gameStatus[1]}</p>
      </div>
    </div>
  );
};

export default GameStatusText;
