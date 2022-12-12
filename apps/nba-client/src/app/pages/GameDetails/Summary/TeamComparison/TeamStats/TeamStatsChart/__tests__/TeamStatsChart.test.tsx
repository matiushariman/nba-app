import TeamStatsChart from '..';

import { render } from '../../../../../../../utils/testUtils';

describe('pages/GameDetails/Summary/TeamComparison/TeamStats/TeamStatsChart', () => {
  it('should render TeamStatsChart that matches snapshot', () => {
    const { baseElement } = render(
      <TeamStatsChart
        primaryText="100/100"
        teamTricode="BOS"
        secondaryText="100%"
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
