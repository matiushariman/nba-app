import { test } from '@playwright/test';

import { GamesSteps } from './steps/games-steps';

test('User should be able to see list of today`s games', async ({ page }) => {
  await page.goto('/');

  const gamesSteps = new GamesSteps(page);

  await test.step('Verify that list of games is displayed', async () =>
    gamesSteps.isListOfTodaysGamesVisible());
});
