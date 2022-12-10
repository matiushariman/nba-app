import Score from '..';

import { render, screen } from '../../../../../../utils/testUtils';

jest.mock('../../../../../context/GameStatusContext', () => ({
  useGameStatusContext: jest
    .fn()
    .mockReturnValueOnce({
      hasGameStarted: true,
    })
    .mockReturnValueOnce({
      hasGameStarted: false,
    }),
}));

describe('pages/games/GameCard/Scoreboard/GameCard/Score', () => {
  beforeEach(() => {
    render(<Score score={100} />);
  });

  it('should render score if game has started', () => {
    expect(screen.getByText(/100/i)).toBeVisible();
  });

  it('should render - if game has not started', () => {
    expect(screen.getByText('-')).toBeVisible();
  });
});
