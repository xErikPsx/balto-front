import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// ? Components

import Spinner from '../components/Molecules/spinner';

const Home = lazy(() => import('../components/Pages/Home'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner height={150} width={150} />}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoutes;
