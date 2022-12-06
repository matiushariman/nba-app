import Scoreboard from '..';
import { render, screen } from '../../../utils/testUtils';

describe('components/Scoreboard', () => {
  it('should display list of games', async () => {
    render(<Scoreboard />);

    const todaysGames = await screen.findAllByLabelText(/today's game/i);

    expect(todaysGames.length).toEqual(3);
  });
});
