import { BASE_URL_MOVIES } from "../constants";

export const getMovies = () => {
  return fetch(`${BASE_URL_MOVIES}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => alert(err));
};
