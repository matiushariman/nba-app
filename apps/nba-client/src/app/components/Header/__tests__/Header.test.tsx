import Header from '..';

import { render } from '../../../utils/testUtils';

describe('components/Header', () => {
  it('should render Header that matches snapshot', () => {
    const { baseElement } = render(<Header />);

    expect(baseElement).toMatchSnapshot();
  });
});
