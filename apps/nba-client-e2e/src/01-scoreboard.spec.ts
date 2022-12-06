import { test } from '@playwright/test';

import { ScoreboardSteps } from './steps/scoreboard-steps';

test('User should be able to see scoreboard', async ({ page }) => {
  await page.goto('/');

  const scoreboardSteps = new ScoreboardSteps(page);

  await test.step('Verify that scoreboard is displayed', async () =>
    scoreboardSteps.isScoreboardVisible());
});
