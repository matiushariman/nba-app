import type { Locator, Page } from '@playwright/test';

export class HomePage {
  private readonly page: Page;
  readonly listOfTodaysGames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.listOfTodaysGames = page.locator(`[aria-label="today's games"]`);
  }
}
