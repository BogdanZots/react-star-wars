import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { setLocalStorage } from "../utils/network";
import favoriteReducer from "./reducers/favoriteReducer";
import { setToLocalStorage } from "../utils/network";

const redusers = combineReducers({
  favoritePage: favoriteReducer,
});

const store = createStore(redusers,composeWithDevTools());
window.store = store;

store.subscribe(()=>{
    setToLocalStorage('store',store.getState().favoritePage)
})

export default store;
