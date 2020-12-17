const BASE_URL = "https://movie-api.jas0nhuang.tw";

export const getLatestMovies = () => {
  return fetch(`${BASE_URL}/movies-thisweek`).then((res) => res.json());
};
