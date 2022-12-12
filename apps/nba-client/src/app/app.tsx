import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import InfoBanner from './components/InfoBanner';
import Header from './components/Header';
import Games from './pages/Games';
import { shouldUseMock } from './utils/mockUtils';

const GameDetails = lazy(() => import('./pages/GameDetails'));

export function App() {
  return (
    <>
      {shouldUseMock && <InfoBanner />}
      <Header />
      <Routes>
        <Route
          path="game-details/:gameId"
          element={
            <Suspense fallback={null}>
              <GameDetails />
            </Suspense>
          }
        />
        <Route path="/" element={<Games />} />
      </Routes>
    </>
  );
}

export default App;
