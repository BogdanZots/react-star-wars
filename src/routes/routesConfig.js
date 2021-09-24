import PeoplePage from "@containers/PeoplePage/PeoplePage";
import HomePage from "@containers/HomePage/HomePage";
import PersonPage from "../containers/PersonPage/PersonPage";
import FavoritePage from "../containers/favoritesPage.jsx/FavoritePage";

const routesConfig = [
  {
    path: "/home",
    exact: true,
    component: HomePage,
  },
  {
    path: "/people",
    exact: true,
    component: PeoplePage,
  },
  {
    path: "/favorite",
    exact: true,
    component: FavoritePage,
  },
  {
    path: "/people/:id", // обозначаем через : что id
    exact: true,
    component: PersonPage,
  },
];

export default routesConfig;
