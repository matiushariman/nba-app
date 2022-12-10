import GameLeaders from '..';

import { mockGames } from '../../../../../../mocks/games/handlers';
import { render, screen } from '../../../../../utils/testUtils';

const { gameLeaders: mockGameLeaders } = mockGames.scoreboard.games[0];

jest.mock('../../../../context/GameStatusContext', () => ({
  useGameStatusContext: jest
    .fn()
    .mockReturnValueOnce({
      hasGameStarted: true,
    })
    .mockReturnValueOnce({
      hasGameStarted: false,
    }),
}));

describe('pages/Games/GameCard/GameLeaders', () => {
  it('should render game leaders stats if game has started', () => {
    render(<GameLeaders gameLeaders={mockGameLeaders} />);

    expect(screen.getByLabelText(/game leaders stats/i)).toBeVisible();
  });

  it('should render - if game has not started', () => {
    render(<GameLeaders gameLeaders={mockGameLeaders} />);

    expect(screen.getByText('-')).toBeVisible();
  });
});
