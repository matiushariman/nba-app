import GameCard from '../GameCard';
import { render } from '../../../../utils/testUtils';

describe('pages/Games/GameCard', () => {
  const homeTeam = {
    teamId: 0,
    teamName: 'Celtics',
    wins: 82,
    losses: 0,
    score: 131,
  };
  const awayTeam = {
    teamId: 1,
    teamName: 'Lakers',
    wins: 0,
    losses: 82,
    score: 92,
  };

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

  it('should render GameCard that matches snapshot', () => {
    const { baseElement } = render(
      <GameCard
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        gameStatusText="FINAL"
        gameLeaders={gameLeaders}
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
