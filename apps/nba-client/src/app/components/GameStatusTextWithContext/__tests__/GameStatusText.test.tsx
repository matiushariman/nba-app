import GameStatusText from '..';

import { render, screen } from '../../../utils/testUtils';

jest.mock('../../context/GameStatusContext', () => ({
  useGameStatusContext: jest
    .fn()
    .mockReturnValueOnce({
      isLiveGame: true,
      gameStatusText: 'Q1 12:00',
    })
    .mockReturnValueOnce({
      isLiveGame: false,
      gameStatusText: 'FINAL',
    }),
}));

describe('components/GameStatusText', () => {
  it('should render live game if isLiveGame', () => {
    render(<GameStatusText />);

    expect(screen.getByLabelText(/live game/i)).toBeVisible();
  });

  it('should render gameStatusText if not isLiveGame', () => {
    render(<GameStatusText />);

    expect(screen.getByText(/final/i)).toBeVisible();
  });
});
