import { Switch } from '@headlessui/react';

import { useGameContext } from '../../../context/GameContext';

const ScoreToggle = () => {
  const { isScoreHidden, toggleIsScoreHidden } = useGameContext();

  return (
    <div className="flex items-center">
      <label htmlFor="toggle-score" className="text-sm text-gray-600 mr-2">
        Hide Score
      </label>
      <Switch
        id="toggle-score"
        checked={isScoreHidden}
        onChange={toggleIsScoreHidden}
        className={`${isScoreHidden ? 'bg-teal-600' : 'bg-gray-400'}
          relative inline-flex h-[28] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Hide Score</span>
        <span
          aria-hidden="true"
          className={`${isScoreHidden ? 'translate-x-8' : 'translate-x-0'}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default ScoreToggle;
