import { useState, useMemo } from 'react';

import { GameContext } from './GameContext';
import type { GameContextProps } from './GameContext.types';
import type { GameProviderProps } from './GameProvider.types';

export const GameProvider = ({
  isScoreHidden = false,
  children,
}: GameProviderProps) => {
  const [hideScore, setHideScore] = useState(isScoreHidden);

  const memoizedValue = useMemo<GameContextProps>(
    () => ({
      isScoreHidden: hideScore,
      toggleIsScoreHidden: () => {
        setHideScore((currentHideScore) => !currentHideScore);
      },
    }),
    [hideScore]
  );

  return (
    <GameContext.Provider value={memoizedValue}>
      {children}
    </GameContext.Provider>
  );
};
