import TeamStats from '..';

import { render } from '../../../../../../utils/testUtils';
import { mockBoxcore } from '../../../../../../../mocks/boxscore/handlers';

const { awayTeam, homeTeam } = mockBoxcore[0].game;

describe('pages/GameDetails/Summary/TeamComparison/TeamStats', () => {
  it('should render TeamStatsChart that matches snapshot', () => {
    const { baseElement } = render(
      <TeamStats
        label="Field Goals"
        awayTeam={{
          teamTricode: awayTeam.teamTricode,
          primaryText: '100/100',
          percentage: 100,
        }}
        homeTeam={{
          teamTricode: homeTeam.teamTricode,
          primaryText: '100/100',
          percentage: 100,
        }}
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
