import { useEffect, useState } from "react";
import { getLatestMovies } from "../../WebAPI";
import {
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
} from "../../constants/style";

import styled, { keyframes } from "styled-components";
import CommonPage from "../../pages/CommonPage";

const Root = styled.div`
  background-color: #ededea;
  width: 100%;
  min-height: 900px;
  margin: 0;
  padding: 100px 0 20px;
`;

const Intro = styled.h5`
  color: #545454;
  text-align: center;
  margin-bottom: 2%;
  font-weight: bold;
  width: 72%;
  margin: 0 auto 2%;
  font-family: "sans-serif", "微軟正黑體";
  color: #545454;
  text-align: center;
  ${MEDIA_QUERY_LG} {
    margin: 5% auto 0;
  }
  ${MEDIA_QUERY_MD} {
    margin: 5% auto 0;
  }
  ${MEDIA_QUERY_SM} {
    margin: 10% auto 0;
    width: 78%;
  }
`;

const rotate = keyframes`{
  to {
    transform: rotate(1turn);
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

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLatestMovies()
      .then((movies) => setMovies(movies))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <Root>
      <Intro>
        Hello Movies
        提供最新上映電影訂閱服務，可依喜好電影類型訂閱，即時獲取最新電影資訊！
      </Intro>
      {isLoading && (
        <Loading>
          <Circle />
        </Loading>
      )}
      <CommonPage movies={movies} />
    </Root>
  );
}
