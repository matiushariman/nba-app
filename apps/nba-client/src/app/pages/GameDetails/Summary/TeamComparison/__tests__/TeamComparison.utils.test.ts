import {
  getPtsOffTurnoversStats,
  getOffReboundsStats,
  getDefReboundsStats,
  getFastBreakPtsStats,
  getBlocksStats,
  getStealsStats,
  getReboundsStats,
  getAssistsStats,
  getFieldGoalStats,
  getThreePtStats,
  getFreeThrowStats,
  getPercentage,
} from '../TeamComparison.utils';
import { mockBoxcore } from '../../../../../../mocks/boxscore/handlers';

const { homeTeam, awayTeam } = mockBoxcore[0].game;

describe('pages/GameDetails/Summary/TeamComparison/TeamComparison.utils', () => {
  describe('getPtsOffTurnoversStats', () => {
    it('should return object that matches snapshot', () => {
      expect(getPtsOffTurnoversStats(awayTeam, homeTeam)).toMatchSnapshot();
    });
  });

  describe('getOffReboundsStats', () => {
    it('should return object that matches snapshot', () => {
      expect(getOffReboundsStats(awayTeam, homeTeam)).toMatchSnapshot();
    });
  });

  describe('getDefReboundsStats', () => {
    it('should return object that matches snapshot', () => {
      expect(getDefReboundsStats(awayTeam, homeTeam)).toMatchSnapshot();
    });
  });

  describe('getFastBreakPtsStats', () => {
    it('should return object that matches snapshot', () => {
      expect(getFastBreakPtsStats(awayTeam, homeTeam)).toMatchSnapshot();
    });
  });

  describe('getBlocksStats', () => {
    it('should return object that matches snapshot', () => {
      expect(getBlocksStats(awayTeam, homeTeam)).toMatchSnapshot();
    });
  });

  describe('getStealsStats', () => {
    it('should return object that matches snapshot', () => {
      expect(getStealsStats(awayTeam, homeTeam)).toMatchSnapshot();
    });
  });

  describe('getReboundsStats', () => {
    it('should return object that matches snapshot', () => {
      expect(getReboundsStats(awayTeam, homeTeam)).toMatchSnapshot();
    });
  });

  describe('getAssistsStats', () => {
    it('should return object that matches snapshot', () => {
      expect(getAssistsStats(awayTeam, homeTeam)).toMatchSnapshot();
    });
  });

  describe('getFieldGoalStats', () => {
    it('should return object that matches snapshot', () => {
      expect(getFieldGoalStats(awayTeam, homeTeam)).toMatchSnapshot();
    });
  });

  describe('getThreePtStats', () => {
    it('should return object that matches snapshot', () => {
      expect(getThreePtStats(awayTeam, homeTeam)).toMatchSnapshot();
    });
  });

  describe('getFreeThrowStats', () => {
    it('should return object that matches snapshot', () => {
      expect(getFreeThrowStats(awayTeam, homeTeam)).toMatchSnapshot();
    });
  });

  describe('getPercentage', () => {
    it('should return number in percentage', () => {
      expect(getPercentage(0.01)).toEqual(1);
    });
  });
});
