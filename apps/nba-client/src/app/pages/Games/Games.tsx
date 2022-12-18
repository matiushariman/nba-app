import GameCard from './GameCard';
import ScoreToggle from './ScoreToggle';
import useGetGames from '../../hooks/useGetGames';
import { GameProvider } from '../../context/GameContext';
import LoadingText from '../../components/LoadingText';

const Games = () => {
  const { data, isLoading } = useGetGames();

  if (isLoading) {
    return <LoadingText />;
  }

  return (
    <GameProvider>
      <div className="container mx-auto pt-6 pb-6">
        <div className="grid gap-4">
          <div>
            <ScoreToggle />
          </div>
          <div
            data-testid="todays-games"
            aria-label="today's games"
            className="grid md:grid-cols-2 md:gap-4 divide-y md:divide-y-0"
          >
            {data?.scoreboard.games.map((game) => (
              <GameCard
                key={game.gameId}
                homeTeam={game.homeTeam}
                awayTeam={game.awayTeam}
                gameId={game.gameId}
                gameStatusText={game.gameStatusText}
                gameLeaders={game.gameLeaders}
                gameStatus={game.gameStatus}
              />
            ))}
          </div>
        </div>
      </div>
    </GameProvider>
  );
};

export default Games;
