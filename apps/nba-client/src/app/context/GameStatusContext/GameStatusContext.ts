import { createContext, useContext } from 'react';

import type { GameStatusContextProps } from './GameStatusContext.types';

export const GameStatusContext = createContext<GameStatusContextProps>(
  {} as GameStatusContextProps
);

export const useGameStatusContext = () => {
  return useContext<GameStatusContextProps>(GameStatusContext);
};
