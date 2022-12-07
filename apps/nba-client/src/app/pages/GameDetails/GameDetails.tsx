import { useParams } from 'react-router-dom';

import useGetGame from '../../hooks/useGetGame';

const GameDetails = () => {
  const { gameId = '' } = useParams<{ gameId: string }>();
  const { isLoading, data } = useGetGame({ gameId });

  if (isLoading) {
    return null;
  }

  return <p>{data?.homeTeam.teamName}</p>;
};

export default GameDetails;
