import { expect, Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';

export class ScoreboardSteps {
  private readonly homePage: HomePage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
  }

  async isScoreboardVisible() {
    await expect(this.homePage.listOfTodaysGames).toBeVisible();
  }
}
