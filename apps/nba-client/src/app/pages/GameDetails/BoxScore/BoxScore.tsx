import PlayersBoxScore from './PlayersBoxScore';

import { selectGameBoxScore } from '../../../hooks/useGetBoxscore';

const BoxScore = () => {
  const { homeTeam, awayTeam } = selectGameBoxScore();

  return (
    <div
      data-testId="game-details-boxscore"
      className="container mx-auto md:pt-6 md:pb-6 grid gap-4"
    >
      <PlayersBoxScore
        teamName={awayTeam.teamName}
        teamCity={awayTeam.teamCity}
        players={awayTeam.players}
      />
      <PlayersBoxScore
        teamName={homeTeam.teamName}
        teamCity={homeTeam.teamCity}
        players={homeTeam.players}
      />
    </div>
  );
};

export default BoxScore;
