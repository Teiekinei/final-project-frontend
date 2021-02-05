import { useEffect, useState } from "react";
import { getMoviesIntheaters } from "../../WebAPI";

import { Link, useParams } from "react-router-dom";
import IntroPage from "../../pages/IntroPage";
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
  margin-top: 100px;
  animation: ${rotate} 1s infinite;
  border-radius: 50%;
`;

const Loading = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  max-width: 100vw;
  overflow: hidden;
  zoom: 2.5;
`;

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { genre } = useParams();
  switch (genre) {
    case 'action':
      genre = "動作";
      break;
    case 'drama':
      genre = "劇情";
      break;
    case 'crime':
      genre = "犯罪";
      break;
    case 'fantasy':
      genre = "奇幻";
      break;
    case 'romance':
      genre = "愛情/溫馨";
      break;
    case 'animation':
      genre = "動畫";
      break;
    case 'documentary':
      genre = "紀錄片";
      break;
    case 'festival':
      genre = "影展";
      break;
    case 'series':
      genre = "影集";
      break;
    default:
      genre = "";
  }

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setIsLoading(true);
    getMoviesIntheaters(genre)
      .then((movies) => setMovies(movies))
      .then(() => setIsLoading(false));
  }, [genre]);


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
      {!isLoading && (
        <CommonPage movies={movies} />
      )}
    </Root>
  );
}
