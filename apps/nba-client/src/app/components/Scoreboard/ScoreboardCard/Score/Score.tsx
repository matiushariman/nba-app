import { ScoreProps } from './Score.types';

const Score = ({ score }: ScoreProps) => (
  <p className="font-bold text-3xl">{score}</p>
);

export default Score;
