const BASE_URL = "https://movie-api.jas0nhuang.tw";

export const getLatestMovies = () => {
  return fetch(`${BASE_URL}/movies-thisweek`).then((res) => res.json());
};

export const getActionMovies = () => {
  return fetch(`${BASE_URL}/movies-intheaters?genre=動作`).then((res) =>
    res.json()
  );
};

export const getDramaMovies = () => {
  return fetch(`${BASE_URL}/movies-intheaters?genre=劇情`).then((res) =>
    res.json()
  );
};

export const getCrimeMovies = () => {
  return fetch(`${BASE_URL}/movies-intheaters?genre=犯罪`).then((res) =>
    res.json()
  );
};

export const getFantasyMovies = () => {
  return fetch(`${BASE_URL}/movies-intheaters?genre=奇幻`).then((res) =>
    res.json()
  );
};

export const getRomanceMovies = () => {
  return fetch(`${BASE_URL}/movies-intheaters?genre=愛情/溫馨`).then((res) =>
    res.json()
  );
};

export const getAnimationMovies = () => {
  return fetch(`${BASE_URL}/movies-intheaters?genre=動畫`).then((res) =>
    res.json()
  );
};

export const getDocumentaryMovies = () => {
  return fetch(`${BASE_URL}/movies-intheaters?genre=紀錄片`).then((res) =>
    res.json()
  );
};
