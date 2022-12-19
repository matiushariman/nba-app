import GameInfo from '..';
import { render } from '../../../../utils/testUtils';

jest.mock('../../../hooks/useGetBoxscore', () => ({
  selectArena: jest.fn().mockReturnValueOnce({
    arenaName: 'TD Garden',
    arenaCity: 'Boston',
    arenaState: 'MA',
  }),
  selectGameTime: jest.fn().mockReturnValueOnce('2022-12-10T22:00:00Z'),
  selectGameScore: jest.fn().mockReturnValueOnce({
    awayTeam: {
      teamId: '1',
      teamName: 'Lakers',
      score: '92',
    },
    homeTeam: {
      teamId: '2',
      teamName: 'Celtics',
      score: '131',
    },
    gameStatusText: 'FINAL',
  }),
}));

describe('pages/GameDetails/GameInfo', () => {
  it('should render GameInfo that matches snapshot', () => {
    const { baseElement } = render(<GameInfo />);

    expect(baseElement).toMatchSnapshot();
  });
});
