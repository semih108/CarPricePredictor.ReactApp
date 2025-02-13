import { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const AppRouter = () => {
  return (
    <Router basename="/">
      <Suspense fallback={null}>
        <Styles />
        <Header />
        <Switch>
          {routes.map((routeItem) => {
            return (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                exact={routeItem.exact}
                component={lazy(() => import(`../pages/${routeItem.component}`))}
              />
            );
          })}
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default AppRouter;
