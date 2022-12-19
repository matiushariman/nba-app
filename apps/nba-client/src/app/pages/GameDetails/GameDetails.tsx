import { useParams } from 'react-router-dom';

import GameInfo from './GameInfo';
import useGetBoxscore from '../../hooks/useGetBoxscore';
import GameScore from './GameScore';
import Summary from './Summary';
import LoadingText from '../../components/LoadingText';

const GameDetails = () => {
  const { gameId = '' } = useParams<{ gameId: string }>();
  const { isLoading: isLoadingBoxscore } = useGetBoxscore({ gameId });

  if (isLoadingBoxscore) {
    return <LoadingText />;
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
