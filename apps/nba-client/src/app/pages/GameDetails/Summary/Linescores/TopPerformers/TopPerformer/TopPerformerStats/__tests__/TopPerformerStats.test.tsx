import TopPerformerStats from '..';
import { render } from '../../../../../../../../utils/testUtils';

describe('pages/GameDetails/Summary/Linescores/TopPerformers/TopPerformer/TopPerformerStats', () => {
  it('should render TopPerformerStats that matches snapshot', () => {
    const { baseElement } = render(
      <TopPerformerStats label="Pts" value={100} />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
