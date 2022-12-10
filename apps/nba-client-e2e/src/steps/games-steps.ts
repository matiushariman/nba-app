import { expect, Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';

export class GamesSteps {
  private readonly homePage: HomePage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
  }

  async isListOfTodaysGamesVisible() {
    await expect(this.homePage.listOfTodaysGames).toBeVisible();
  }

  async toggleHideScore() {
    await this.homePage.scoreToggle.click();
  }

  async isScoreNotDisplayed() {
    await expect(this.homePage.score).toHaveText('-');
  }
}
