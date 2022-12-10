import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import InfoBanner from './components/InfoBanner';
import Header from './components/Header';
import Games from './pages/Games';
import { shouldUseMock } from './utils/mockUtils';

const GameDetails = lazy(() => import('./pages/GameDetails'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Games />,
  },
  {
    path: 'game-details/:gameId',
    element: (
      <Suspense fallback={null}>
        <GameDetails />
      </Suspense>
    ),
  },
]);

export function App() {
  return (
    <>
      {shouldUseMock && <InfoBanner />}
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
