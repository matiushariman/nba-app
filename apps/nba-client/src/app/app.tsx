import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Scoreboard from './pages/Scoreboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Scoreboard />,
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
