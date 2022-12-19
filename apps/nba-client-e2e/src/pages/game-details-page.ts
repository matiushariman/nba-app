import type { Locator, Page } from '@playwright/test';

export class GameDetailsPage {
  readonly summaryContent: Locator;
  readonly boxscoreContent: Locator;
  readonly boxscoreTab: Locator;

  constructor(page: Page) {
    this.summaryContent = page.getByTestId('game-details-summary');
    this.boxscoreContent = page.getByTestId('game-details-boxscore');
    this.boxscoreTab = page.getByTestId('tab-boxscore');
  }
}
