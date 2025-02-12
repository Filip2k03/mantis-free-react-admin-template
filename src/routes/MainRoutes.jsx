import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import UserList from 'pages/users/view/UserList';


const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'userlist',
      element: <UserList />
    }

  ]
};

export default MainRoutes;
