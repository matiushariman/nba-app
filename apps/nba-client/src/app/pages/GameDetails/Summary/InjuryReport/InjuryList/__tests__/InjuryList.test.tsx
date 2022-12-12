import InjuryList from '..';
import { render, screen } from '../../../../../../utils/testUtils';

jest.mock('../../../../../hooks/useGetBoxscore', () => ({
  selectInjuredPlayers: jest
    .fn()
    .mockReturnValueOnce([
      {
        name: 'Anthony Davis',
        personId: 1,
        teamId: 1,
        teamTricode: 'LAL',
        jerseyNum: 3,
      },
    ])
    .mockReturnValueOnce([]),
}));

describe('pages/GameDetails/Summary/InjuryReport/InjuryList', () => {
  it('should render InjuryList that matches snapshot when there is injured player on the list', () => {
    const { baseElement } = render(<InjuryList />);

    expect(baseElement).toMatchSnapshot();
  });

  it('should render - if InjuryList is empty', () => {
    render(<InjuryList />);

    expect(screen.getByText('-')).toBeVisible();
  });
});
