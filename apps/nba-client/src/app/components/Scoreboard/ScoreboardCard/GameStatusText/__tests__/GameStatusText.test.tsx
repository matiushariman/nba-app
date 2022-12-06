import GameStatusText from '..';

import { render, screen } from '../../../../../utils/testUtils';

describe('components/Scoreboard/ScoreboardCard/GameStatusText', () => {
  it('should render FINAL if gameStatusText contains final', () => {
    render(<GameStatusText gameStatusText="final" />);

    expect(screen.getByText(/final/i)).toBeVisible();
  });

  it('should render live status if gameStatusText does not contain final', () => {
    render(<GameStatusText gameStatusText="Q1 12:00" />);

    expect(screen.getByLabelText(/live game/i)).toBeVisible();
  });
});
