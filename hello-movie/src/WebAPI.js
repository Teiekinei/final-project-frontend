const BASE_URL = "https://movie-api.jas0nhuang.tw";

export const getLatestMovies = () => {
  return fetch(`${BASE_URL}/movies-intheaters`).then((res) => res.json());
};

export const getMoviesGenres = () => {
  return fetch(`${BASE_URL}/movie-genres`).then((res) => res.json());
};
