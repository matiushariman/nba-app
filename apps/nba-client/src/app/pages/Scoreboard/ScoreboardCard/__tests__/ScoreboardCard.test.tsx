import ScoreboardCard from '../ScoreboardCard';
import { render } from '../../../../utils/testUtils';

describe('pages/Scoreboard/ScoreboardCard', () => {
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

  it('should render ScoreboardCard that matches snapshot', () => {
    const { baseElement } = render(
      <ScoreboardCard
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        gameStatusText="FINAL"
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
