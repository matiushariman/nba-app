import userEvent from '@testing-library/user-event';
import { GameContext, GameProvider } from '..';

import { render, screen } from '../../../utils/testUtils';

describe('context/GameContext/GameProvider', () => {
  beforeEach(() => {
    render(
      <GameProvider>
        <GameContext.Consumer>
          {({ isScoreHidden, toggleIsScoreHidden }) => (
            <div>
              {!isScoreHidden && <p>I am not hidden</p>}
              <button onClick={toggleIsScoreHidden}>Hide</button>
            </div>
          )}
        </GameContext.Consumer>
      </GameProvider>
    );
  });

  it('should display paragraph when !isScoreHidden', () => {
    expect(screen.getByText(/I am not hidden/i)).toBeVisible();
  });

  it('should hide paragraph on button click', async () => {
    const hideBtn = screen.getByRole('button', { name: /hide/i });

    await userEvent.click(hideBtn);

    expect(screen.queryByText(/I am not hidden/i)).toBeNull();
  });
});
