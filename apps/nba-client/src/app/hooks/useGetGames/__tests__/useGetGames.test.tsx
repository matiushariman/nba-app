import useGetGames from '..';

import { mockGames } from '../../../../mocks/games/handlers';
import { renderHook, wrapper, waitFor } from '../../../utils/testUtils';

describe('hooks/useGetGames', () => {
  it('should return games response', async () => {
    const { result } = renderHook(() => useGetGames(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockGames);
  });
});
