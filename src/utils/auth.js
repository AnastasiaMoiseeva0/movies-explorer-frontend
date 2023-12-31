import request from "./utils";
export const BASE_URL = "https://movies-explorer-api-vpun.onrender.com";

export const register = (name, email, password) => {
  return request(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
};

export const authorize = (password, email) => {
  return request(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((data) => {
    if (data?.token) {
      localStorage.setItem("jwt", data.token);
      return data;
    } else {
      throw new Error();
    }
  });
};

export const getCurrentUser = () => {
  return localStorage.getItem("jwt")
    ? request(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
    : Promise.resolve(null);
};
