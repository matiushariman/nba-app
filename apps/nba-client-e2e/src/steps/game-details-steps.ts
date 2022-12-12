import { Page, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';

export class GameDetailsSteps {
  private readonly page: Page;
  private readonly homePage: HomePage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
  }

  async navigateToGameDetailsPage() {
    await this.homePage.gameDetailsBtn.click();
  }

  async verifyUserIsOnGameDetailsPage() {
    await expect(this.page).toHaveURL(/game-details/i);
  }
}
