import request from "./utils";

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getHeaders () {
    return {
      ...this._headers,
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    };
  }

  createMovies(movie) {
    return request(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify(movie),
    }).then(res => res.data);
  }

  deleteMovie(id) {
    return request(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(res => res.data);
  }

  getUserInfo() {
    return request(`${this._baseUrl}/users/me`,  {
      headers: this._getHeaders(),
    }).then(res => res.data);
  }

  setUserInfo(userInfo) {
    return request(`${this._baseUrl}/users/me`,  {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify(userInfo),
    }).then(res => res.data);
  }

}

const mainApi = new MainApi({
  baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;