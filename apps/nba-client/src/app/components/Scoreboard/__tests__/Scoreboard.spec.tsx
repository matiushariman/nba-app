import Scoreboard from '..';
import { render, screen } from '../../../utils/testUtils';

describe('components/Scoreboard', () => {
  it('should display list of games', async () => {
    render(<Scoreboard />);

    const todaysGames = await screen.findByLabelText(/today's games/i);

    expect(todaysGames).toBeVisible();
  });
});
