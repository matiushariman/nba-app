import LiveStatus from './LiveStatus';
import { useGameStatusContext } from '../../context/GameStatusContext';

const GameStatusText = () => {
  const { isLiveGame, gameStatusText } = useGameStatusContext();

  if (!isLiveGame) {
    return <p className="text-sm uppercase font-bold">{gameStatusText}</p>;
  }

  // get Q# and time remaining from text
  const gameStatus = gameStatusText.split(' ');

  return (
    <div className="flex items-center gap-1">
      <LiveStatus />
      <p className="text-sm uppercase font-bold">{gameStatus[0]}</p>
      <p className="text-sm">{gameStatus[1]}</p>
    </div>
  );
};

export default GameStatusText;
