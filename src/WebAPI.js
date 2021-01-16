const BASE_URL = "https://movie-api.jas0nhuang.tw";

export const getMoviesIntheaters = (genreName) => {
  if (genreName) {
    return fetch(`${BASE_URL}/movies-intheaters?genre=${genreName}`).then((res) =>
      res.json()
    );
  }
  return fetch(`${BASE_URL}/movies-intheaters`).then((res) => res.json());
}
/* 改成上面的寫法的話下面的就可以刪掉了 :D */
export const getMoviesByGenre = (name) => {
  return fetch(`${BASE_URL}/movies-intheaters?genre=${name}`).then((res) =>
    res.json()
  );
}

export const getLatestMovies = () => {
  return fetch(`${BASE_URL}/movies-intheaters`).then((res) => res.json());
};


