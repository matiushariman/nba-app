import type { TopPerformerStatsProps } from './TopPerformerStats.types';

const TopPerformerStats = ({ label, value }: TopPerformerStatsProps) => (
  <div>
    <p className="text-center font-bold text-xl">{value}</p>
    <p className="text-center text-sm uppercase">{label}</p>
  </div>
);

export default TopPerformerStats;
