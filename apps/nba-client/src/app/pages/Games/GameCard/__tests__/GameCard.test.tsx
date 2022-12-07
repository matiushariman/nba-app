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

  it('should render GameCard that matches snapshot', () => {
    const { baseElement } = render(
      <GameCard
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        gameStatusText="FINAL"
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
