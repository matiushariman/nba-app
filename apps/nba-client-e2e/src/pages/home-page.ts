import type { Locator, Page } from '@playwright/test';

export class HomePage {
  private readonly page: Page;
  readonly listOfTodaysGames: Locator;
  readonly scoreToggle: Locator;
  readonly score: Locator;

  constructor(page: Page) {
    this.page = page;
    this.listOfTodaysGames = page.locator(`[aria-label="today's games"]`);
    this.scoreToggle = page.locator(
      'button[role="switch"]:has-text("Hide Score")'
    );
    this.score = page.locator('text=Suns16 - 11- >> p').nth(2);
  }
}
