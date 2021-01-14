import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../../WebAPI";
import styled, { keyframes } from "styled-components";
import CommonPage from "../../pages/CommonPage";

const Root = styled.div`
  background-color: #ededea;
  width: 100%;
  min-height: 900px;
  margin: 0;
  padding: 100px 0 20px;
`;

const rotate = keyframes`{
  to{
    transform: rotate(1turn)
  }
}`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #e5e5e5;
  border-top-color: #51d4db;
  display: block;
  animation: ${rotate} 1s infinite;
  border-radius: 50%;
`;

const Loading = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(3);
  max-width: 100vw;
  overflow: hidden;
`;

export default function RomancePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMoviesByGenre("愛情/溫馨")
      .then((movies) => setMovies(movies))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <Root>
      {isLoading && (
        <Loading>
          <Circle />
        </Loading>
      )}
      <CommonPage movies={movies} />
    </Root>
  );
}
