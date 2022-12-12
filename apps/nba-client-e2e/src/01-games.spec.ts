import { test as base } from '@playwright/test';

import { GamesSteps } from './steps/games-steps';

// Extend basic test by providing a "gamesSteps" fixture.
const test = base.extend<{ gamesSteps: GamesSteps }>({
  gamesSteps: async ({ page }, use) => {
    const gamesSteps = new GamesSteps(page);

    await page.goto('/');

    await use(gamesSteps);
  },
});

test.describe('01-games', () => {
  test('User should be able to see list of today`s games', async ({
    gamesSteps,
  }) => {
    await test.step('Verify that list of games is displayed', async () =>
      gamesSteps.isListOfTodaysGamesVisible());
  });

  test('User should be able to hide score', async ({ gamesSteps }) => {
    await test.step('User press hide score toggle', async () =>
      gamesSteps.toggleHideScore());

    await test.step('Verify that score is not displayed', async () =>
      gamesSteps.isScoreNotDisplayed());
  });
});
