import { useParams } from 'react-router-dom';
import { Tab } from '@headlessui/react';

import GameInfo from './GameInfo';
import useGetGame from '../../hooks/useGetGame';
import useGetBoxscore from '../../hooks/useGetBoxscore';
import GameScore from './GameScore';
import Summary from './Summary';
import LoadingText from '../../components/LoadingText';
import BoxScore from './BoxScore';

const TABS = ['Game Summary', 'Box Score'];

const GameDetails = () => {
  const { gameId = '' } = useParams<{ gameId: string }>();
  const { isLoading: isLoadingGame } = useGetGame({ gameId });
  const { isLoading: isLoadingBoxscore } = useGetBoxscore({ gameId });

  if (isLoadingGame || isLoadingBoxscore) {
    return <LoadingText />;
  }

  return (
    <>
      <GameScore />
      <GameInfo />
      <Tab.Group>
        <div className="bg-white">
          <Tab.List className="container mx-auto">
            {TABS.map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  `${
                    selected && 'font-bold border-b-4 border-black'
                  } pt-2 pb-2 pl-5 pr-5 outline-none`
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <Summary />
          </Tab.Panel>
          <Tab.Panel>
            <BoxScore />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default GameDetails;
