import type { TeamScoreProps } from './TeamScore.types';

const TeamScore = ({ score }: TeamScoreProps) => (
  <div className="w-[72px]">
    <p className="text-3xl font-bold text-center">{score}</p>
  </div>
);

export default TeamScore;
