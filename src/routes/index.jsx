import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// ? Components

import Spinner from '../shared/spinner';

const Home = lazy(() => import('../pages/Home'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoutes;
