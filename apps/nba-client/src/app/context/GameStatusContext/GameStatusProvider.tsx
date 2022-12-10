import { useMemo } from 'react';
import { GameStatusContext } from './GameStatusContext';
import {
  isLiveGame,
  hasGameStarted,
  isGameOver,
} from './GameStatusProvider.utils';

import type { GameStatusContextProps } from './GameStatusContext.types';
import type { GameStatusProviderProps } from './GameStatusProvider.types';

export const GameStatusProvider = ({
  gameStatus,
  gameStatusText,
  children,
}: GameStatusProviderProps) => {
  const memoizedValue = useMemo<GameStatusContextProps>(
    () => ({
      hasGameStarted: hasGameStarted(gameStatus),
      gameStatusText: gameStatusText,
      isGameOver: isGameOver(gameStatus),
      isLiveGame: isLiveGame(gameStatus),
    }),
    [gameStatus, gameStatusText]
  );

  return (
    <GameStatusContext.Provider value={memoizedValue}>
      {children}
    </GameStatusContext.Provider>
  );
};
