import { fetchScoreboard } from '../useGetScoreboard';

jest.mock('../../api', () => ({
  getScoreboard: async () => ({
    data: [],
  }),
}));

describe('hooks/useGetScoreboard/fetchScoreboard', () => {
  it('should return scoreboard response', async () => {
    expect(await fetchScoreboard()).toEqual([]);
  });
});
