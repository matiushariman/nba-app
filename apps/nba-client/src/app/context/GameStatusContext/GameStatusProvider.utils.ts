import { Game, GameStatusEnum } from '@nba-app/types-nba';

type GameStatus = Game['gameStatus'];

export const isLiveGame = (gameStatus: GameStatus) =>
  gameStatus === GameStatusEnum.livegame;

export const isGameOver = (gameStatus: GameStatus) =>
  gameStatus === GameStatusEnum.endgame;

export const hasGameStarted = (gameStatus: GameStatus) =>
  gameStatus !== GameStatusEnum.pregame;
