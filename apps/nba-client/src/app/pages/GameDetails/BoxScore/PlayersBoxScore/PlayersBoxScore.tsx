import { Card } from '../../../../components/ui';
import PlayerHeadshot from '../../../../components/PlayerHeadshot';
import PlayerStatistics from './PlayerStatistics';

import type { PlayersBoxScoreProps } from './PlayersBoxScore.types';

const HEADER = [
  'min',
  'fgm',
  'fga',
  'fg%',
  '3pm',
  '3pa',
  '3p%',
  'ftm',
  'fta',
  'ft%',
  'oreb',
  'dreb',
  'reb',
  'ast',
  'stl',
  'blk',
  'to',
  'pf',
  'pts',
  '+/-',
];

const PlayersBoxScore = ({
  teamName,
  teamCity,
  players,
}: PlayersBoxScoreProps) => (
  <Card className="p-5 grid gap-4">
    <p className="text-lg font-bold">
      {teamCity} {teamName}
    </p>
    <div>
      <table className="table-fixed w-full">
        <thead className="border-b-2">
          <tr>
            <th
              align="left"
              className="font-light uppercase text-sm w-[240px] pb-2 pt-2 border-r-2"
            >
              Player
            </th>
            {HEADER.map((header) => (
              <th
                key={header}
                align="right"
                className="font-light uppercase text-sm"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {players.map((player) => (
            <tr key={player.personId}>
              <td className="text-sm pt-2 pb-2 border-r-2">
                <div className="flex items-center">
                  <div className="mr-2">
                    <PlayerHeadshot
                      name={player.name}
                      personId={player.personId}
                      size="sm"
                    />
                  </div>
                  {player.name}{' '}
                  <span className="font-bold ml-1">{player.position}</span>
                </div>
              </td>
              <PlayerStatistics
                statistics={player.statistics}
                played={player.played}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);

export default PlayersBoxScore;
