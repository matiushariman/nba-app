import Score from '..';

import { render } from '../../../../../utils/testUtils';

describe('components/Scoreboard/ScoreboardCard/Score', () => {
  it('should render Score that matches snapshot', () => {
    const { baseElement } = render(<Score score={100} />);

    expect(baseElement).toMatchSnapshot();
  });
});
