import ScoreboardTeamDetails from '..';
import { render } from '../../../../../../utils/testUtils';

describe('pages/games/GameCard/Scoreboard/GameCard/TeamDetails', () => {
  it('should render TeamDetails that matches snapshot', () => {
    const { baseElement } = render(
      <ScoreboardTeamDetails
        teamId={123}
        teamName="Celtics"
        wins={82}
        losses={0}
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
