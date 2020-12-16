const BASE_URL = "http://movie-api.jas0nhuang.tw";

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies-thisweek`).then((res) => res.json());
};
