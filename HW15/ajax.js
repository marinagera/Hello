import { movieList } from "./movie.js";

fetch("https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    movieList(document.querySelector("main"), data);
  });
