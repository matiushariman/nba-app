import userEvent from '@testing-library/user-event';
import Scoreboard from '..';
import { render, screen } from '../../../../../utils/testUtils';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: jest.fn().mockImplementationOnce(() => mockNavigate),
}));

jest.mock('../../../../context/GameStatusContext', () => ({
  __esModule: true,
  useGameStatusContext: jest.fn().mockReturnValue({
    hasGameStarted: true,
  }),
}));

describe('pages/Games/GameCard/Scoreboard', () => {
  const homeTeam = {
    teamId: 0,
    teamName: 'Celtics',
    wins: 82,
    losses: 0,
    score: 131,
  };
  const awayTeam = {
    teamId: 1,
    teamName: 'Lakers',
    wins: 0,
    losses: 82,
    score: 92,
  };

  it('should call navigate on game details button click', async () => {
    render(<Scoreboard homeTeam={homeTeam} awayTeam={awayTeam} gameId="123" />);

    const gameDetailsBtn = screen.getByRole('button', {
      name: /game details/i,
    });

    await userEvent.click(gameDetailsBtn);

    expect(mockNavigate).toHaveBeenCalled();
  });
});
