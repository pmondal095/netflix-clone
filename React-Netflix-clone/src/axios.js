import axios from "axios";

const instance = axios.create({
  /** base url to mke the request to the movie database */
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
