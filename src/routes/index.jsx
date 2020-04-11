import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Spinner from "../shared/spinner";

// * Containers
const Home = lazy(() => import("../components/Pages/Home"));
const Symptoms = lazy(() => import("../containers/Symptoms/Symptoms"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/symptoms" component={Symptoms} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoutes;
