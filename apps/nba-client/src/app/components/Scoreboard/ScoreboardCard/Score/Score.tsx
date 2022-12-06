import { ScoreProps } from './Score.types';

const Score = ({ score }: ScoreProps) => (
  <div className="w-[52px]">
    <p className="font-bold text-3xl">{score}</p>
  </div>
);

export default Score;
