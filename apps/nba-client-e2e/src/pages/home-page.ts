import type { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly listOfTodaysGames: Locator;
  readonly scoreToggle: Locator;
  readonly score: Locator;
  readonly gameDetailsBtn: Locator;

  constructor(page: Page) {
    this.listOfTodaysGames = page.getByTestId('todays-games');
    this.scoreToggle = page.getByRole('switch', { name: /Hide Score/i });
    this.score = page.getByTestId('score').first();
    this.gameDetailsBtn = page
      .getByRole('button', { name: /game details/i })
      .first();
  }
}
