import TeamDetails from './TeamDetails';
import Score from './Score';
import GameStatusText from './GameStatusText';

import type { ScoreboardProps } from './Scoreboard.types';

const Scoreboard = ({
  awayTeam,
  homeTeam,
  gameStatusText,
}: ScoreboardProps) => (
  <div className="pt-2 pb-2 pl-4 pr-4 flex gap-2">
    <div className="flex gap-3 items-center">
      <TeamDetails
        teamId={awayTeam.teamId}
        teamName={awayTeam.teamName}
        wins={awayTeam.wins}
        losses={awayTeam.losses}
      />
      <Score score={awayTeam.score} />
    </div>
    <div className="flex-grow flex justify-center">
      <GameStatusText gameStatusText={gameStatusText} />
    </div>
    <div className="flex gap-3 items-center">
      <Score score={homeTeam.score} />
      <TeamDetails
        teamId={homeTeam.teamId}
        teamName={homeTeam.teamName}
        wins={homeTeam.wins}
        losses={homeTeam.losses}
      />
    </div>
  </div>
);

export default Scoreboard;
