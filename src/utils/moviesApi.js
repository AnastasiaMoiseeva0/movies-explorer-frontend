import request from "./utils";

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getMovies() {
    return request(`${this._baseUrl}/movies`, {
        headers: this._headers,
    }).then(res => res.data);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    authorization: "110366df-b38b-45be-88c4-715aacdd3349",
    "Content-Type": "application/json",
  },
});

export default moviesApi;
