import { useParams } from 'react-router-dom';

import GameInfo from './GameInfo';
import useGetGame from '../../hooks/useGetGame';

const GameDetails = () => {
  const { gameId = '' } = useParams<{ gameId: string }>();
  const { isLoading } = useGetGame({ gameId });

  if (isLoading) {
    return null;
  }

  return <GameInfo />;
};

export default GameDetails;
