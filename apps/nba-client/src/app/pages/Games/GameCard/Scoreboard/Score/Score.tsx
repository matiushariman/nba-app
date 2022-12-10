import { useGameStatusContext } from '../../../../../context/GameStatusContext';

import type { ScoreProps } from './Score.types';

const Score = ({ score }: ScoreProps) => {
  const { hasGameStarted } = useGameStatusContext();

  return (
    <div className="w-[52px]">
      <p className="font-bold text-3xl text-center">
        {hasGameStarted ? score : '-'}
      </p>
    </div>
  );
};

export default Score;
