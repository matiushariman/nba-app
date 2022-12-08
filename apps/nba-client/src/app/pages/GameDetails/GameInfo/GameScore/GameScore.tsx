import TeamScore from './TeamScore';
import TeamLogo from '../../../../components/TeamLogo';
import GameStatusText from '../../../../components/GameStatusText';
import { selectGame } from '../../../../hooks/useGetGame';

const GameScore = () => {
  const game = selectGame();

  if (!game) {
    return null;
  }

  const { awayTeam, homeTeam, gameStatusText } = game;

  return (
    <div className="flex w-[370px] items-center" aria-label="game score">
      <TeamLogo
        teamId={awayTeam.teamId}
        teamName={awayTeam.teamName}
        height={52}
        width={52}
      />
      <TeamScore score={awayTeam.score} />
      <div className="flex-grow flex justify-around">
        <GameStatusText gameStatusText={gameStatusText} />
      </div>
      <TeamScore score={homeTeam.score} />
      <TeamLogo
        teamId={homeTeam.teamId}
        teamName={homeTeam.teamName}
        height={52}
        width={52}
      />
    </div>
  );
};

export default GameScore;
