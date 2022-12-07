import GameLeaders from '..';

import { render } from '../../../../../utils/testUtils';

describe('pages/Games/GameCard/GameLeaders', () => {
  const gameLeaders = {
    homeLeaders: {
      personId: 202691,
      name: 'Klay Thompson',
      jerseyNum: '11',
      position: 'G',
      teamTricode: 'GSW',
      playerSlug: 'klay-thompson',
      points: 17,
      rebounds: 1,
      assists: 1,
    },
    awayLeaders: {
      personId: 1630188,
      name: 'Jalen Smith',
      jerseyNum: '25',
      position: 'FC',
      teamTricode: 'IND',
      playerSlug: 'jalen-smith',
      points: 9,
      rebounds: 6,
      assists: 1,
    },
  };

  it('should render GameLeaderDetails that matches snapshot', () => {
    const { baseElement } = render(<GameLeaders gameLeaders={gameLeaders} />);

    expect(baseElement).toMatchSnapshot();
  });
});
