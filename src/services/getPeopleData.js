import {
  HTTPS,
  SWAPI_ROOT,
  SWAPI_PEOPLE,
  URL_IMG_PERSON,
  GUID_IMG_EXTENSION,
  SWAPI_PARAM_PAGE,
} from "@const/api";

export const getPeoplePageId = (url) => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);
  return Number(id);
};

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
export const getAllUsersUlrs = (count, url) => {
  let countsArr = [];
  for (let i = 1; i <= count; ++i) {
    countsArr.push(url + `${i}`);
  }
  console.log(countsArr);
  return countsArr;
};
export const getAllDataFromArray = (arr) => {
  const results = [];
  console.log(arr[2]);
  for (let i = 0; i < arr.length; i++) {
    let arrToSearch = arr[i];
    for (let j = 0; j < arr[i].length; j++) {
      results.push(arrToSearch[j]);
    }
  }
  return results;
};
export const getPeopleImg = (id) => URL_IMG_PERSON + id + GUID_IMG_EXTENSION;

export const checkIsObjEmpty = (obj) => {
  for (let key in obj) {
    return true;
  }
  return false;
  /*   return Object.keys(obj).length === 0; */
};
