import { useGameStatusContext } from '../../../../../context/GameStatusContext';
import { useGameContext } from '../../../../../context/GameContext';

import type { ScoreProps } from './Score.types';

const Score = ({ score }: ScoreProps) => {
  const { hasGameStarted } = useGameStatusContext();
  const { isScoreHidden } = useGameContext();

  return (
    <div className="w-[52px]">
      <p className="font-bold text-3xl text-center" data-testid="score">
        {hasGameStarted && !isScoreHidden ? score : '-'}
      </p>
    </div>
  );
};

export default Score;
