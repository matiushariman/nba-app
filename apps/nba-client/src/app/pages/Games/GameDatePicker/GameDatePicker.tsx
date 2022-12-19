import { Fragment } from 'react';
import dayjs from 'dayjs';
import { Popover, Transition } from '@headlessui/react';
import { CalendarIcon } from '@heroicons/react/20/solid';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import type { GameDatePickerProps } from './GameDatePicker.types';

export default function GameDatePicker({
  onSelect,
  selected,
}: GameDatePickerProps) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <div className="flex">
            <input
              className="bg-gray-200 border-solid pl-3 pr-3 text-sm"
              type="text"
              disabled
              value={dayjs(selected ?? new Date()).format('ddd, MMM DD')}
            />
            <Popover.Button
              aria-label="open calendar"
              data-testId="date-picker-btn"
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center bg-amber-400 px-3 py-2 text-base font-medium text-black hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <CalendarIcon
                className={`${open ? '' : 'text-opacity-70'}
                   h-5 w-5 text-black-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-[75%] z-10 mt-3 -translate-x-1/2 transform px-4 bg-white">
              <div
                data-testId="date-picker-calendar"
                className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={onSelect}
                  disabled={[{ after: new Date() }]}
                />
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
