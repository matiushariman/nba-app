import { Page, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { GameDetailsPage } from '../pages/game-details-page';

export class GameDetailsSteps {
  private readonly page: Page;
  private readonly homePage: HomePage;

  private readonly gameDetailsPage: GameDetailsPage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.gameDetailsPage = new GameDetailsPage(page);
  }

  async navigateToGameDetailsPage() {
    await this.homePage.gameDetailsBtn.click();
  }

  async verifyUserIsOnGameDetailsPage() {
    await expect(this.page).toHaveURL(/game-details/i);
  }

  async verifyGameDetailsSummaryIsVisible() {
    await expect(this.gameDetailsPage.summaryContent).toBeVisible();
  }

  async navigateToBoxScoreTab() {
    await this.gameDetailsPage.boxscoreTab.click();
  }

  async verifyGameDetailsBoxScoreIsVisible() {
    await expect(this.gameDetailsPage.boxscoreContent).toBeVisible();
  }
}
