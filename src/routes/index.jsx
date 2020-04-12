import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Spinner from '../components/Molecules/spinner';

// * Containers
const Symptoms = lazy(() => import('../containers/Symptoms/Symptoms'));
const LandingPage = lazy(() => import('../containers/Landing/Landing'));
const Error404 = lazy(() => import('../containers/Errors/Error404'));
const Login = lazy(() => import('../containers/Login/Login'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner height={150} width={150} />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/symptoms" component={Symptoms} />
          <Route exact path="/Login" component={Login} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoutes;
