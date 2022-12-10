import { GameStatusEnum } from '@nba-app/types-nba';
import {
  hasGameStarted,
  isGameOver,
  isLiveGame,
} from '../GameStatusProvider.utils';

describe('context/GameStatusContext/GameStatusProvider.utils', () => {
  describe('hasGameStarted', () => {
    it('should return false if gameStatus is pregame', () => {
      expect(hasGameStarted(GameStatusEnum.pregame)).toEqual(false);
    });

    it('should return true if gameStatus is not pregame', () => {
      expect(hasGameStarted(GameStatusEnum.livegame)).toEqual(true);
      expect(hasGameStarted(GameStatusEnum.endgame)).toEqual(true);
    });
  });

  describe('isGameOver', () => {
    it('should return true if gameStatus is endgame', () => {
      expect(isGameOver(GameStatusEnum.endgame)).toEqual(true);
    });

    it('should return true if gameStatus is not endgame', () => {
      expect(isGameOver(GameStatusEnum.pregame)).toEqual(false);
    });
  });

  describe('isLiveGame', () => {
    it('should return true if gameStatus is livegame', () => {
      expect(isLiveGame(GameStatusEnum.livegame)).toEqual(true);
    });

    it('should return true if gameStatus is not livegame', () => {
      expect(isLiveGame(GameStatusEnum.endgame)).toEqual(false);
    });
  });
});
