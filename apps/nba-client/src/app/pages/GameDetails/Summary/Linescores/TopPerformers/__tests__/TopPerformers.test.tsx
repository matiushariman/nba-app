import TopPerformers from '..';
import { render, screen } from '../../../../../../utils/testUtils';

jest.mock('../../../../../hooks/useGetGame', () => ({
  selectGameLeaders: jest
    .fn()
    .mockReturnValueOnce({
      homeLeaders: {
        personId: 1629627,
        name: 'Zion Williamson',
        jerseyNum: '1',
        position: 'F',
        teamTricode: 'NOP',
        playerSlug: null,
        points: 35,
        rebounds: 8,
        assists: 3,
      },
      awayLeaders: {
        personId: 1629028,
        name: 'Deandre Ayton',
        jerseyNum: '22',
        position: 'C',
        teamTricode: 'PHX',
        playerSlug: null,
        points: 28,
        rebounds: 12,
        assists: 5,
      },
    })
    .mockReturnValueOnce(undefined),
}));

describe('pages/GameDetails/Summary/Linescores/TopPerformers', () => {
  it('should render TopPerformers that matches snapshot when gameLeaders data is available', () => {
    const { baseElement } = render(<TopPerformers />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should render - when gameLeaders data is not available', () => {
    render(<TopPerformers />);

    expect(screen.getByText('-')).toBeVisible();
  });
});
