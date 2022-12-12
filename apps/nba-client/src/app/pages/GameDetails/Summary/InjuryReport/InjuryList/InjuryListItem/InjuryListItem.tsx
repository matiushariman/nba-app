import PlayerHeadshot from '../../../../../../components/PlayerHeadshot';
import TeamLogo from '../../../../../../components/TeamLogo';

import type { InjuryListItemProps } from './InjuryListItem.types';

const InjuryListItem = ({
  personId,
  name,
  teamId,
  teamTricode,
  jerseyNum,
}: InjuryListItemProps) => (
  <div className="pt-2 pb-2 flex items-center gap-2">
    <div>
      <PlayerHeadshot personId={personId} name={name} size="md" />
    </div>
    <div>
      <TeamLogo teamId={teamId} teamName={teamTricode} width={24} height={24} />
    </div>
    <div className="grid">
      <p className="text-sm">{name}</p>
      <p className="text-xs text-gray-500">
        {teamTricode} | #{jerseyNum}
      </p>
    </div>
  </div>
);

export default InjuryListItem;
