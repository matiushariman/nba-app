import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../../utils/testUtils';
import GameDatePicker from '../GameDatePicker';

describe('pages/Games/GameDatePicker', () => {
  it('should open calendar after clicking on date picker button', async () => {
    render(<GameDatePicker onSelect={jest.fn()} />);

    const datePickerBtn = screen.getByRole('button', {
      name: /open calendar/i,
    });

    await userEvent.click(datePickerBtn);

    expect(screen.getByTestId('date-picker-calendar')).toBeVisible();
  });
});
