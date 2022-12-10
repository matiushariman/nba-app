import GameCard from './GameCard';
import useGetGames from '../../hooks/useGetGames';

const Games = () => {
  const { data, isLoading } = useGetGames();

  return (
    <div className="container mx-auto">
      {isLoading ? null : (
        <div
          aria-label="today's games"
          className="grid md:pt-6 md:pb-6 md:grid-cols-2 md:gap-4 divide-y md:divide-y-0"
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
      )}
    </div>
  );
};

export default Games;
