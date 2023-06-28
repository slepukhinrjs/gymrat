import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Program from '../components/Program';
import Error from './Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: 'program',
    element: <Program />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
