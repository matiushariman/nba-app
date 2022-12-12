import TopPerformer from '..';
import { render } from '../../../../../../../utils/testUtils';
import { mockGames } from '../../../../../../../../mocks/games/handlers';

const { awayLeaders } = mockGames.scoreboard.games[0].gameLeaders;

describe('pages/GameDetails/Summary/Linescores/TopPerformers/TopPerformer', () => {
  it('should render TopPerformer that matches snapshot', () => {
    const { baseElement } = render(<TopPerformer {...awayLeaders} />);

    expect(baseElement).toMatchSnapshot();
  });
});
