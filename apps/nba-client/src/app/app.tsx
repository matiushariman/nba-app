import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Games from './pages/Games';

const GameDetails = lazy(() => import('./pages/GameDetails'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Games />,
  },
  {
    path: 'game-details/:id',
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
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
