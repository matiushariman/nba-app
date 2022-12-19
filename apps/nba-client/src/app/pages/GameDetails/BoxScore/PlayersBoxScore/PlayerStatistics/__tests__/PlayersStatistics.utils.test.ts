import {
  getPlayingTime,
  getShootingPercentage,
} from '../PlayersStatistics.utils';

describe('pages/GameDetails/BoxScore/PlayersBoxScore/PlayersStatistics/PlayersStatistics.utils', () => {
  describe('getPlayingTime()', () => {
    it('should return mins and secs PT', () => {
      expect(getPlayingTime('PT12M25')).toEqual('12:25');
    });
  });

  describe('getShootingPercentage()', () => {
    it('should return shooting percentage', () => {
      expect(getShootingPercentage(0.35)).toEqual('35.0%');
    });
  });
});
