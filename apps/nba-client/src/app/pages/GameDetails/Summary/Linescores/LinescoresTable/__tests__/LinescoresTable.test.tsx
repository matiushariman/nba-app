import LinescoresTable from '..';
import { render } from '../../../../../../utils/testUtils';

jest.mock('../../../../../hooks/useGetBoxscore', () => ({
  selectLinescores: jest.fn().mockReturnValueOnce([
    {
      teamTricode: 'LAL',
      score: 92,
      periods: [
        {
          period: 1,
          score: 20,
        },
        {
          period: 2,
          score: 15,
        },
        {
          period: 3,
          score: 25,
        },
        {
          period: 4,
          score: 32,
        },
      ],
    },
    {
      teamTricode: 'BOS',
      score: 131,
      periods: [
        {
          period: 1,
          score: 24,
        },
        {
          period: 2,
          score: 34,
        },
        {
          period: 3,
          score: 31,
        },
        {
          period: 4,
          score: 42,
        },
      ],
    },
  ]),
  selectPeriod: jest.fn().mockReturnValueOnce([
    {
      period: 1,
      label: 'Q1',
    },
    {
      period: 2,
      label: 'Q2',
    },
    {
      period: 3,
      label: 'Q3',
    },
    {
      period: 4,
      label: 'Q4',
    },
  ]),
}));

describe('pages/GameDetails/Summary/Linescores/LinescoresTable', () => {
  it('should render LinescoresTable that matches snapshot', () => {
    const { baseElement } = render(<LinescoresTable />);

    expect(baseElement).toMatchSnapshot();
  });
});
