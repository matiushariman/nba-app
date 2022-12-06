import ScoreboardCard from './ScoreboardCard';
import useGetScoreboard from '../../hooks/useGetScoreboard';

const Scoreboard = () => {
  const { data, isLoading } = useGetScoreboard();

  return (
    <div className="container mx-auto">
      <div className="grid md:pt-6 md:grid-cols-2 gap-6">
        {isLoading ? null : (
          <div aria-label="today's games">
            {data?.scoreboard.games.map((game) => (
              <ScoreboardCard
                key={game.gameId}
                homeTeam={game.homeTeam}
                awayTeam={game.awayTeam}
                gameStatusText={game.gameStatusText}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Scoreboard;
