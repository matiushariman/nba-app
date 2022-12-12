import Card from '..';
import { render } from '../../../../utils/testUtils';

describe('components/ui/Card', () => {
  it('should render Card that matches snapshot', () => {
    const { baseElement } = render(<Card>Hello</Card>);

    expect(baseElement).toMatchSnapshot();
  });
});
