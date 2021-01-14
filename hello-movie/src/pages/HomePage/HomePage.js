import { useEffect, useState } from "react";
import { getLatestMovies } from "../../WebAPI";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IntroPage from "../../pages/IntroPage";
import { MEDIA_QUERY_SM, MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "../../constants/style";

const Root = styled.div`
  background-color: #ededea;
  width: 100%;
  min-height: 900px;
  margin: 0;
  padding: 100px 0 20px;
`;

const MovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 10%;
  ${MEDIA_QUERY_SM}{
    margin: 0;
  }
`;

const Intro = styled.h5`
  color: #545454;
  text-align: center;
  margin-bottom: 2%;
  font-weight: bold;
  width: 72%;
  margin: 0 auto 2%;
  font-family: "微軟正黑體";
  color: #545454;
  text-align: center;
  ${MEDIA_QUERY_LG}{
    margin: 5% auto 3%;
  }
  ${MEDIA_QUERY_MD}{
    margin: 5% auto 5%;
  }
  ${MEDIA_QUERY_SM}{
    margin: 10% auto 5%;
    width: 78%;
  }
`;

const Card = styled.div`
  background-color: #a6d5db;
  width: 30%;
  color: #545454;
  font-family: "sans-serif", "微軟正黑體";
  margin-bottom: 6%;
  border-radius: 10px;
  position: relative;
  text-decoration: none;
  color: #fff;
  // &:hover {
  //   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  // }
  img{
    max-height: 60vh;
  }
  ${MEDIA_QUERY_LG}{
    width: 31%;
    margin-bottom: 3%;
  }
  ${MEDIA_QUERY_MD}{
    width: 47%;
    margin-bottom: 6%;
  }
  ${MEDIA_QUERY_SM}{
    width: 90%;
    margin: 3% auto;
  }
`;

const CardTop = styled.img`
  width: 90%;
  margin: 5%;
`;

const CardBottom = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 20px;
`;

const CardTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: break-spaces;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const CardInfo = styled.div`
  width: auto;
  text-align: center;
  padding: 20px 0 0;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #5b80ac;
  border: none;
  outline: none;
  cursor: pointer;
  width: auto;
  text-align: center;
  padding: 6px 12px;
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 7px;
  &:focus{
    outline: none;
  }
  &:hover {
    background-color: #5b80ac;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
`;

const CardEmpty = styled.div`
  width: 30%;
`;

const LoadMore = styled.button`
  margin: 0 auto;
  width: 200px;
  height: 40px;
  background-color: #a6d5db;
  border-radius: 7px;
  display: block;
  border: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: #5b80ac;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
  &:focus{
    outline: none;
  }
`;

function Movie({ setIntro, movie, display, setIntroDisplay }) {
  return (
    <Card>
      <CardTop src={movie.imgSrc}></CardTop>
      <CardBottom>
        <CardTitle>{movie.name}</CardTitle>
        <CardInfo>
          <Button onClick={() => {
            setIntro(movie);
            setIntroDisplay(!display);
          }}>詳細資訊</Button>
        </CardInfo>
      </CardBottom>
    </Card>
  );
}

export default function HomePage() {
  const [visibleMovies, setvisibleMovies] = useState(9);
  const [movies, setMovies] = useState([]);
  const [intro, setIntro] = useState({});

  useEffect(() => {
    getLatestMovies().then((movies) => setMovies(movies));
  }, []);

  const handleShowMoreMovies = () => {
    setvisibleMovies((preVisibleMovies) => preVisibleMovies + 6);
  };

  const [display, setIntroDisplay] = useState(false);

  return (
    <Root>
      <Intro>
        Hello Movies
        提供最新上映電影訂閱服務，可依喜好電影類型訂閱，即時獲取最新電影資訊！
      </Intro>
      {
        display ? <IntroPage intro={intro} display={display} setIntroDisplay={setIntroDisplay} /> : null
      }
      <MovieContainer>
        {movies.slice(0, visibleMovies).map((movie) => (
          <Movie setIntro={setIntro} display={display} setIntroDisplay={setIntroDisplay} key={movie.id} movie={movie} />
        ))}
        <CardEmpty></CardEmpty>
        <CardEmpty></CardEmpty>
      </MovieContainer>
      {visibleMovies < movies.length && (
        <LoadMore onClick={handleShowMoreMovies}>載入更多...</LoadMore>
      )}
    </Root>
  );
}
