import {
  ADD_PERSON_TO_FAVORIT,
  REMOVE_PERSON_FROM_FAVORITE,
} from "../consts/actionTypes";
import { getLocalStorage } from "../../utils/network";

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORIT:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_PERSON_FROM_FAVORITE:
      let copyState = { ...state };
      const key = action.payload;
      let keyToFind;
      for (let findKey in key) {
        keyToFind = key[findKey];
      }
      delete copyState[keyToFind];
      return {
        ...copyState,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
