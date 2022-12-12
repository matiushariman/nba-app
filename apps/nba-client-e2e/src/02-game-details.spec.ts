import { test } from '@playwright/test';

import { GameDetailsSteps } from './steps/game-details-steps';

test.describe('02-game-details', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('User should be able to navigate to game details page', async ({
    page,
  }) => {
    const gameDetailsSteps = new GameDetailsSteps(page);

    await test.step('User clicks on one of the games', async () =>
      gameDetailsSteps.navigateToGameDetailsPage());

    await test.step('Verify user is on game details page', async () =>
      gameDetailsSteps.verifyUserIsOnGameDetailsPage());
  });
});
