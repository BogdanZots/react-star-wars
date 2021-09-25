//common
export const HTTPS = "https://";
export const HTTP = "htpp://";
export const ITEMS_PRE_PAGE = 6;

//swapi
export const SWAPI_ROOT = "swapi.dev/api/";
export const SWAPI_PEOPLE = "people";
export const SWAPI_PARAM_PAGE = '/?page='
export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE+SWAPI_PARAM_PAGE;
export const API_PEOPLE_ALL = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE;
export const API_PERSON = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE;

// visualgide
const GUIDE_ROOTE_IMG = "https://starwars-visualguide.com/assets/img/";
const GUIDE_PEOPLE = "characters/";
export const GUID_IMG_EXTENSION = ".jpg";
export const URL_IMG_PERSON = GUIDE_ROOTE_IMG+GUIDE_PEOPLE;
