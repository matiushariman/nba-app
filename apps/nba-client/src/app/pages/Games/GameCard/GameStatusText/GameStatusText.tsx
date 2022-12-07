import LiveStatus from './LiveStatus';
import type { GameStatusTextProps } from './GameStatusText.types';

const GameStatusText = ({ gameStatusText }: GameStatusTextProps) => {
  if (gameStatusText.toUpperCase().includes('FINAL')) {
    return <p className="text-sm uppercase font-bold">{gameStatusText}</p>;
  }

  // get Q# and time remaining from text
  const gameStatus = gameStatusText.split(' ');

  return (
    <div className="flex items-center gap-1" aria-label="live game">
      <LiveStatus />
      <p className="text-sm uppercase font-bold">{gameStatus[0]}</p>
      <p className="text-sm">{gameStatus[1]}</p>
    </div>
  );
};

export default GameStatusText;
