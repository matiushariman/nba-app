import type { ReverseMap } from '../utils';

export const GameStatusEnum = {
  pregame: 1,
  livegame: 2,
  endgame: 3,
} as const;

export type GameStatus = ReverseMap<typeof GameStatusEnum>;
