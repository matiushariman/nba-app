import { getScoreboard } from '../support/scoreboard.po';

describe('01-scoreboard', () => {
  beforeEach(() => cy.visit('/'));

  it('should be able to see list of games', () => {
    getScoreboard().should('be.visible');
  });
});
