import {
  selectLinescores,
  selectPeriod,
} from '../../../../../hooks/useGetBoxscore';

const LinescoresTable = () => {
  const linescores = selectLinescores();
  const period = selectPeriod();

  return (
    <table className="table-auto w-full">
      <thead className="bg-gray-300">
        <tr>
          <th className="uppercase text-xs pt-1 pb-1 pl-4" align="left">
            Team
          </th>
          {period.map((currentPeriod) => (
            <th className="uppercase text-xs" key={currentPeriod.label}>
              {currentPeriod.label}
            </th>
          ))}
          <th className="uppercase text-xs pr-4" align="right">
            Final
          </th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {linescores.map((linescore) => (
          <tr key={linescore.teamTricode}>
            <td className="font-bold text-sm pt-1 pb-1 pl-4">
              {linescore.teamTricode}
            </td>
            {linescore.periods.map((period) => (
              <td
                className="text-sm"
                align="center"
                key={`${linescore.teamTricode}-${period.period}`}
              >
                {period.score}
              </td>
            ))}
            <td align="right" className="pr-4 text-sm">
              {linescore.score}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LinescoresTable;
