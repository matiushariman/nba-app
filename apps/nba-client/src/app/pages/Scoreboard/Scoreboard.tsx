import ScoreboardCard from './ScoreboardCard';
import useGetScoreboard from '../../hooks/useGetScoreboard';

const Scoreboard = () => {
  const { data, isLoading } = useGetScoreboard();

  return (
    <div className="container mx-auto">
      {isLoading ? null : (
        <div
          aria-label="today's games"
          className="grid md:pt-6 md:grid-cols-2 gap-6"
        >
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
  );
};

export default Scoreboard;
