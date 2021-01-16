const BASE_URL = "https://movie-api.jas0nhuang.tw";

export function getMoviesByGenre(name) {
  return fetch(`${BASE_URL}/movies-intheaters?genre=${name}`).then((res) =>
    res.json()
  );
}

export const getLatestMovies = () => {
  return fetch(`${BASE_URL}/movies-intheaters`).then((res) => res.json());
};

export const getMovieGenres = () => {
  return fetch(`${BASE_URL}/movie-genres`).then((res) => res.json());
};
