import InjuryReport from '..';
import { render } from '../../../../../utils/testUtils';

jest.mock('../../../../../hooks/useGetBoxscore', () => ({
  selectInjuredPlayers: jest.fn().mockReturnValueOnce([
    {
      name: 'Anthony Davis',
      personId: 1,
      teamId: 1,
      teamTricode: 'LAL',
      jerseyNum: 3,
    },
  ]),
}));

describe('pages/GameDetails/Summary/InjuryReport', () => {
  it('should render InjuryReport that matches snapshot', () => {
    const { baseElement } = render(<InjuryReport />);

    expect(baseElement).toMatchSnapshot();
  });
});
