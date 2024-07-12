import React, { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LayoutLoader } from './components/Loaders';

// code splitting, Dynamic Import

const Chat = lazy(() => import('./components/Chat'));
const Groups = lazy(() => import('./components/Groups'));
const Login = lazy(() => import('./components/Login'));
const Home = lazy(() => import('./components/Home'));
const NotFound = lazy(() => import('./components/NotFound'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/chat/:chatId',
    element: <Chat />,
  },
  {
    path: '/groups',
    element: <Groups />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => {
  return (
    <Suspense fallback={<LayoutLoader />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default App;
