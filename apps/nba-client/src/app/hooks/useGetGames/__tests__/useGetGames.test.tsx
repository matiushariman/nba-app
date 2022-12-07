import { fetchGames } from '../useGetGames';

jest.mock('../../api', () => ({
  getGames: async () => ({
    data: [],
  }),
}));

describe('hooks/useGetGames/fetchGames', () => {
  it('should return games response', async () => {
    expect(await fetchGames()).toEqual([]);
  });
});
