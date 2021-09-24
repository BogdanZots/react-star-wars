import {REMOVE_PERSON_FROM_FAVORITE, ADD_PERSON_TO_FAVORIT} from "../consts/actionTypes.js"

export const setPersonToFavorit = (payload) => ({type: ADD_PERSON_TO_FAVORIT, payload});
export const removePersonFromFavorit = (payload) => ({type: REMOVE_PERSON_FROM_FAVORITE, payload});
