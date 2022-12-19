import type { SelectSingleEventHandler } from 'react-day-picker';

export interface GameDatePickerProps {
  onSelect: SelectSingleEventHandler;
  selected?: Date;
}
