import request from "./utils";
import { MOVIES_API_URL } from './constants';

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getMovies() {
    return request(`${this._baseUrl}`, {
        headers: this._headers,
    }).then(res => {
      return res;
    });
  }
}

const moviesApi = new MoviesApi({
  baseUrl: MOVIES_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
