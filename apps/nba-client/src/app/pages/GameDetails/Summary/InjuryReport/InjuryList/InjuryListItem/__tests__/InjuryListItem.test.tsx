import InjuryListItem from '..';
import { render } from '../../../../../../../utils/testUtils';

describe('pages/GameDetails/Summary/InjuryReport/InjuryList/InjuryListItem', () => {
  it('should render InjuryListItem that matches snapshot', () => {
    const { baseElement } = render(
      <InjuryListItem
        teamId={1}
        teamTricode="BOS"
        personId={1}
        jerseyNum="0"
        name="Jayson Tatum"
      />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
