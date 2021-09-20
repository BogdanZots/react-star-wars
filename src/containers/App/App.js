import s from "./App.module.css";
import routesConfig from "../../routes/routesConfig";
import { NavLink, Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "@components/Header/Header";
const App = () => {
  return (
    <div className={s.wrapper}>
      <BrowserRouter>
        <Header />
        <Switch>
          {routesConfig.map((route) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
