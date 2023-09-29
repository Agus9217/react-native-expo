import axios from "axios";

const movieDb = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "a883691ab900776614b9e1d1eeae2b1f",
    language: "es-ES",
  },
});

export default movieDb;
