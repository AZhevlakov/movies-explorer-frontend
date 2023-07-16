import { BASE_URL } from "../constants";

const request = (
  {
    baseURL = BASE_URL,
    urlParams = "",
    method = "GET",
    headers = {
      "Content-Type": "application/json",
    },
    body,
    token = "",
  }
) => {
  const options = {
    method: method,
    headers: headers,
  }

  if (token) {
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  if (body) options.body = JSON.stringify(body);

  return fetch(`${baseURL}${urlParams}`, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => alert(err));
};

const requestWithToken = ({ ...params }) => {
  const token = localStorage.getItem("token");
  return request({ ...params, token: token });
};

export const register = (name, email, password) => {
  return request({
    urlParams: "/signup",
    method: "POST",
    body: { name, email, password },
  });
};

export const login = (email, password) => {
  return request({
    urlParams: "/signin",
    method: "POST",
    body: { email, password },
  });
};

export const getUserInfo = () => {
  return requestWithToken({
    urlParams: "/users/me",
  });
};

export const updateUserInfo = (name, email) => {
  return requestWithToken({
    urlParams: "/users/me",
    method: "PATCH",
    body: { name, email },
  });
};

export const getMovies = () => {
  return requestWithToken({
    urlParams: "/movies",
  });
};

// country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, movieId
export const createMovie = (movie) => {
  return requestWithToken({
    urlParams: "/movies",
    method: "POST",
    body: {
      movieId: movie.id,
      nameRU: movie.nameRU,
      image: movie.image,
      trailerLink: movie.trailerLink,
      duration: movie.duration,
    },
  });
};

export const deleteMovie = (id) => {
  return requestWithToken({
    urlParams: `/movies/${id}`,
    method: "DELETE",
  });
};
