import GameScore from './GameScore';

import './GameInfo.styles.css';

const GameInfo = () => {
  return (
    <div>
      <div className="min-h-[64px] bg-white shadow flex items-center">
        <div className="container mx-auto flex justify-around md:justify-start divide-x">
          <GameScore />
        </div>
      </div>
      <div className="bg-black">
        <div className="relative h-[512px] bg-black p-10 container mx-auto max-w-[920px]">
          <div className="hero-layer hero-overlay" />
          <img
            src="https://cdn.nba.com/next/arenas/arena.jpg"
            className="hero-layer"
            alt="arena"
          />
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
