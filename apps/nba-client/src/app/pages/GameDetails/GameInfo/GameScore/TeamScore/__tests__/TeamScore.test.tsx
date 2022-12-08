import { render } from '../../../../../../utils/testUtils';

import TeamScore from '..';

describe('pages/GameDetails/GameInfo/GameScore/TeamScore', () => {
  it('should render TeamScore that matches snapshot', () => {
    const { baseElement } = render(<TeamScore score={100} />);

    expect(baseElement).toMatchSnapshot();
  });
});
