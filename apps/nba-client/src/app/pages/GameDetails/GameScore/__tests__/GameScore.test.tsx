import GameScore from '..';
import { render } from '../../../../utils/testUtils';

jest.mock('../../../hooks/useGetBoxscore', () => ({
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

describe('pages/GameDetails/GameScore', () => {
  it('should render GameScore that matches snapshot', () => {
    const { baseElement } = render(<GameScore />);

    expect(baseElement).toMatchSnapshot();
  });
});
