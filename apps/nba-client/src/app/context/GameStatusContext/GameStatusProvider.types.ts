import type { Game } from '@nba-app/types-nba';
import type { ReactNode } from 'react';

export interface GameStatusProviderProps
  extends Pick<Game, 'gameStatusText' | 'gameStatus'> {
  children?: ReactNode;
}
