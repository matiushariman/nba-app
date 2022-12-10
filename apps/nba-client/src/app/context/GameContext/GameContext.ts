import { createContext, useContext } from 'react';

import type { GameContextProps } from './GameContext.types';

export const GameContext = createContext<GameContextProps>(
  {} as GameContextProps
);

export const useGameContext = () => {
  return useContext<GameContextProps>(GameContext);
};
