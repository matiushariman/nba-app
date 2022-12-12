import type { TeamStatsChartProps } from './TeamStatsChart.types';

const COLORS = {
  home: 'bg-red-800',
  away: 'bg-blue-800',
};

const TeamStatsChart = ({
  teamTricode,
  percentage = 0,
  secondaryText,
  primaryText,
  color = 'home',
}: TeamStatsChartProps) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="flex-grow">
          <p className="text-sm">{teamTricode}</p>
        </div>
        {secondaryText && (
          <div>
            <p className="text-gray-500 text-sm">{secondaryText}</p>
          </div>
        )}
        <div>
          <p className="font-bold text-lg">{primaryText}</p>
        </div>
      </div>
      <div className="relative h-4">
        <div
          className={`absolute h-4 ${COLORS[color]} z-10`}
          style={{ width: `${percentage}%` }}
        />
        <div className="absolute h-4 bg-gray-100 w-full" />
      </div>
    </div>
  );
};

export default TeamStatsChart;
