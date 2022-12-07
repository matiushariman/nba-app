import GameLeaderDetails from '..';

import { render } from '../../../../../../utils/testUtils';

describe('pages/Games/GameCard/GameLeaders/GameLeaderDetails', () => {
  it('should render GameLeaderDetails that matches snapshot', () => {
    const { baseElement } = render(
      <GameLeaderDetails
        personId={1}
        name="Jayson Tatum"
        jerseyNum="0"
        position="SF"
        teamTricode="BOS"
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
