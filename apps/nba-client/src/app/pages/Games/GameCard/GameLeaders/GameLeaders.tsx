import GameLeaderDetails from './GameLeaderDetails';

import type { GameLeadersProps } from './GameLeaders.types';

const TABLE_HEADER = ['Pts', 'Reb', 'Ast'];

const GameLeaders = ({ gameLeaders }: GameLeadersProps) => {
  const GAME_LEADERS = [gameLeaders.awayLeaders, gameLeaders.homeLeaders];

  return (
    <div className="pt-4 pb-2 pl-4 pr-4 grid gap-2">
      <p className="font-bold text-sm uppercase">Game Leaders</p>
      <div>
        <table className="table-auto w-full">
          <thead className="border-b">
            <tr>
              <th className="w-[60%]" />
              {TABLE_HEADER.map((header, i) => (
                <th
                  key={`gameLeaderTh-${i}`}
                  className="text-xs uppercase text-right"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GAME_LEADERS.map((gameLeader) => (
              <tr key={gameLeader.personId}>
                <td>
                  <GameLeaderDetails
                    name={gameLeader.name}
                    jerseyNum={gameLeader.jerseyNum}
                    teamTricode={gameLeader.teamTricode}
                    position={gameLeader.position}
                    personId={gameLeader.personId}
                  />
                </td>
                <td className="text-sm text-right">{gameLeader.points}</td>
                <td className="text-sm text-right">{gameLeader.rebounds}</td>
                <td className="text-sm text-right">{gameLeader.assists}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameLeaders;
