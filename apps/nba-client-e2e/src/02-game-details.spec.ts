import { test as base } from '@playwright/test';

import { GameDetailsSteps } from './steps/game-details-steps';

// Extend basic test by providing a "gameDetailsSteps" fixture.
const test = base.extend<{ gameDetailsSteps: GameDetailsSteps }>({
  gameDetailsSteps: async ({ page }, use) => {
    const gameDetailsSteps = new GameDetailsSteps(page);

    await page.goto('/');

    await use(gameDetailsSteps);
  },
});

test.describe('02-game-details', () => {
  test('User should be able to navigate to game details page', async ({
    gameDetailsSteps,
  }) => {
    await test.step('User clicks on one of the games', async () =>
      gameDetailsSteps.navigateToGameDetailsPage());

    await test.step('Verify user is on game details page', async () =>
      gameDetailsSteps.verifyUserIsOnGameDetailsPage());
  });
});
