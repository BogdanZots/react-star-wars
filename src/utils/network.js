export const getApiResource = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return false;
    }
    return await response.json();
  } catch (error) {
    alert("error", error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (arr) => {
  const res = await Promise.all(
    arr.map((promise) => {
      return fetch(promise).then((data) => data.json());
    })
  );
  return res;
};


export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data !== null) {
    return JSON.parse(data);
  }
  return {};
};

export const setToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
