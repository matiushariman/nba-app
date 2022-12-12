import InjuryListItem from './InjuryListItem';
import { selectInjuredPlayers } from '../../../../../hooks/useGetBoxscore';

const InjuryList = () => {
  const injuredPlayers = selectInjuredPlayers();

  if (injuredPlayers.length === 0) {
    return <p>-</p>;
  }

  return (
    <div className="divide-y">
      {injuredPlayers.map((player) => (
        <InjuryListItem
          key={player.personId}
          name={player.name}
          personId={player.personId}
          teamId={player.teamId}
          teamTricode={player.teamTricode}
          jerseyNum={player.jerseyNum}
        />
      ))}
    </div>
  );
};

export default InjuryList;
