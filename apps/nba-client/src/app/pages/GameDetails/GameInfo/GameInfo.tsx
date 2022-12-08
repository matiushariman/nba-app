import './GameInfo.styles.css';

const GameInfo = () => (
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
);

export default GameInfo;
