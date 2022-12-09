import { useQuery } from 'react-query';

import nbaApi from '../../api';

export const fetchGames = async () => {
  const { data } = await nbaApi.getGames();

  return data;
};

const useGetGames = () => {
  return useQuery('GET_GAMES', fetchGames);
};

export default useGetGames;
