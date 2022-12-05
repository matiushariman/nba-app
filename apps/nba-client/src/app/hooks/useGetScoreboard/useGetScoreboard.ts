import { useQuery } from 'react-query';

import nbaApi from '../../api';

export const fetchScoreboard = async () => {
  const { data } = await nbaApi.getScoreboard();

  return data;
};

const useGetScoreboard = () => {
  return useQuery('GET_SCOREBOARD', fetchScoreboard);
};

export default useGetScoreboard;
