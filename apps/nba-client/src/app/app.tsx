import useGetScoreboard from './hooks/useGetScoreboard';

export function App() {
  const { data, isLoading } = useGetScoreboard();

  return (
    <>
      {isLoading
        ? null
        : data?.scoreboard.games.map((game) => (
            <p key={game.gameId}>{game.homeTeam.teamName}</p>
          ))}
    </>
  );
}

export default App;
