import axios from "axios";

export const OmdbApi = (searchMovie) => {
  return axios.get(`http://www.omdbapi.com/?apikey=957dfffb&s=${searchMovie}`);
}