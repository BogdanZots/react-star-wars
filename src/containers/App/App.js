import s from "./App.module.css";
import routesConfig from "../../routes/routesConfig";
import { NavLink, Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "@components/Header/Header";
import PersonPage from "../PersonPage/PersonPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <div className={s.wrapper}>
      <BrowserRouter>
        <Route component={Header} />
        <Switch>
          {routesConfig.map((route) => { // тут у нас массив с роутерами
            return (
              <Route
                path={route.path}
                exact={route.exact} // exact означает точное совпадение
                component={route.component}
              />
            );
          })}
          <Route path="*" exact component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
