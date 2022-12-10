import type { Game } from '@nba-app/types-nba';

export interface GameStatusContextProps extends Pick<Game, 'gameStatusText'> {
  readonly isLiveGame: boolean;
  readonly isGameOver: boolean;
  readonly hasGameStarted: boolean;
}
