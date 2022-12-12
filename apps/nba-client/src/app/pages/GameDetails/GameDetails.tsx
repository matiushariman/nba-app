import { useParams } from 'react-router-dom';

import GameInfo from './GameInfo';
import useGetGame from '../../hooks/useGetGame';
import useGetBoxscore from '../../hooks/useGetBoxscore';
import GameScore from './GameScore';
import Summary from './Summary';

const GameDetails = () => {
  const { gameId = '' } = useParams<{ gameId: string }>();
  const { isLoading: isLoadingGame } = useGetGame({ gameId });
  const { isLoading: isLoadingBoxscore } = useGetBoxscore({ gameId });

  if (isLoadingGame || isLoadingBoxscore) {
    return null;
  }

  return (
    <>
      <GameScore />
      <GameInfo />
      <Summary />
    </>
  );
};

export default GameDetails;
