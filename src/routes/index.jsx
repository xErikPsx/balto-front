import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Spinner from '../components/Molecules/spinner';

// * Containers

const Home = lazy(() => import('../components/Pages/Home'));
const Symptoms = lazy(() => import('../containers/Symptoms/Symptoms'));
const FormPatients = lazy(() =>
  import('../containers/FormPatients/FormPatients')
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner height={150} width={150} />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/symptoms" component={Symptoms} />
          <Route exact path="/form-patients" component={FormPatients} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoutes;
