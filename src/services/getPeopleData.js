import { HTTPS, SWAPI_ROOT, SWAPI_PEOPLE , URL_IMG_PERSON , GUID_IMG_EXTENSION , SWAPI_PARAM_PAGE } from "@const/api";

export const getPeoplePageId = (url) =>{
const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
const id = url.slice(pos+SWAPI_PARAM_PAGE.length,url.length);
console.log(id)
return Number(id);
}

/**
 * Получает id каждого запрашиваемого персонажа из url
 * @param {string} url 
 * @param {string} category 
 * @returns {string} - id персонажа
 */
const getId = (url, category) => {
  const id = url.replace(HTTPS + SWAPI_ROOT + category, "").replace(/\//g, "");
  return id;
};

export const getPeopleId = (url) => {
  return getId(url, SWAPI_PEOPLE);
};

export const getPeopleImg = id => URL_IMG_PERSON+id+GUID_IMG_EXTENSION;


