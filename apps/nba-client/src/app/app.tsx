import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Games from './pages/Games';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Games />,
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
