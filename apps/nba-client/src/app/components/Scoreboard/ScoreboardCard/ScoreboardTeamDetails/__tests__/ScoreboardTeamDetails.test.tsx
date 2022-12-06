import ScoreboardTeamDetails from '..';
import { render } from '../../../../../utils/testUtils';

describe('components/Scoreboard/ScoreboardCard/ScoreboardTeamDetails', () => {
  it('should render ScoreboardTeamDetails that matches snapshot', () => {
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
