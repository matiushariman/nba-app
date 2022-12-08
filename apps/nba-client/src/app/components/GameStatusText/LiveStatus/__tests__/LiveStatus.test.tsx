import LiveStatus from '..';

import { render } from '../../../../utils/testUtils';

describe('components/GameStatusText/LiveStatus', () => {
  it('should render LiveStatus that matches snapshot', () => {
    const { baseElement } = render(<LiveStatus />);

    expect(baseElement).toMatchSnapshot();
  });
});
