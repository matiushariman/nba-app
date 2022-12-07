import useGetGame from '..';

import { mockGames } from '../../../../mocks/games/handlers';
import { renderHook, wrapper, waitFor } from '../../../utils/testUtils';

const mockGame = mockGames.scoreboard.games[0];
const { gameId } = mockGame;

describe('hooks/useGetGame', () => {
  it('should return game response', async () => {
    const { result } = renderHook(() => useGetGame({ gameId }), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockGame);
  });
});
