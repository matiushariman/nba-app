import { test } from '@playwright/test';

import { GamesSteps } from './steps/games-steps';

test.describe('01-games', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('User should be able to see list of today`s games', async ({ page }) => {
    const gamesSteps = new GamesSteps(page);
    await test.step('Verify that list of games is displayed', async () =>
      gamesSteps.isListOfTodaysGamesVisible());
  });

  test('User should be able to hide score', async ({ page }) => {
    const gamesSteps = new GamesSteps(page);

    await test.step('User press hide score toggle', async () =>
      gamesSteps.toggleHideScore());

    await test.step('Verify that score is not displayed', async () =>
      gamesSteps.isScoreNotDisplayed());
  });
});
