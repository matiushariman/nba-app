import TeamLogo from '../../../components/TeamLogo';
import { selectGame } from '../../../hooks/useGetGame';

import './GameInfo.styles.css';

const GameInfo = () => {
  const game = selectGame();

  if (!game) {
    return null;
  }

  const { awayTeam, homeTeam } = game;

  return (
    <div className="bg-black flex">
      <div className="flex-grow opacity-20 min-w-[240px] relative grayscale hidden md:block">
        <div className="absolute right-[-50%]">
          <TeamLogo
            teamId={awayTeam.teamId}
            teamName={awayTeam.teamName}
            width={360}
            height={360}
            mode="D"
          />
        </div>
      </div>
      <div className="relative h-[360px] bg-black p-10 container mx-auto max-w-[920px] z-10">
        <div className="hero-layer hero-overlay" />
        <img
          src="https://cdn.nba.com/next/arenas/arena.jpg"
          className="hero-layer"
          alt="arena"
        />
        <div className=" relative z-20">
          <p className="text-white font-bold text-4xl uppercase">{`${awayTeam.teamName} @ ${homeTeam.teamName}`}</p>
        </div>
      </div>
      <div className="flex-grow opacity-20 min-w-[240px] relative grayscale hidden md:block">
        <div className="absolute left-[-50%]">
          <TeamLogo
            teamId={homeTeam.teamId}
            teamName={homeTeam.teamName}
            width={480}
            height={480}
            mode="D"
          />
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
