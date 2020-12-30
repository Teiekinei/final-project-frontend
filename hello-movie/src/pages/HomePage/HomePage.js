import { useEffect, useState } from "react";
import { getLatestMovies } from "../../WebAPI";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

const Intro = styled.h2`
  color: #545454;
  text-align: center;
  margin-bottom: 2%;
  font-weight: bold;
  width: 72%;
  margin: 0 auto;
  font-family: "微軟正黑體";
  color: #545454;
  text-align: center;
  margin-bottom: 2%;
`;

const Card = styled(Link)`
  background-color: #a6d5db;
  width: 30%;
  color: #545454;
  margin-bottom: 6%;
  border-radius: 10px;
  position: relative;
  text-decoration: none;
  color: #fff;
  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  }
  &:nth-child(1) {
    width: 47%;
    margin-right: 53%;
    margin-bottom: 6%;
  }
`;
const CardTop = styled.img`
  width: 90%;
  margin: 5%;
`;
const CardBottom = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const CardTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 10%;
  width: 100%;
  word-wrap: break-word;
`;
const CardInfo = styled.div`
  width: 100%;
  text-align: center;
  padding: 0px 20px;
`;
const Button = styled.button`
  background-color: #5b80ac;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  text-align: center;
  padding: 6px 12px;
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 3px;

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
  border-radius: 3px;
  display: block;
  border: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: #5b80ac;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
`;

function Movie({ movie }) {
  return (
    <Card>
      <CardTop src={movie.imgSrc}></CardTop>
      <CardBottom>
        <CardTitle>{movie.name}</CardTitle>
        <CardInfo>
          <Button>詳細資訊</Button>
        </CardInfo>
      </CardBottom>
    </Card>
  );
}

export default function HomePage() {
  const [visibleMovies, setvisibleMovies] = useState(7);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getLatestMovies().then((movies) => setMovies(movies));
  }, []);

  const handleShowMoreMovies = () => {
    setvisibleMovies((preVisibleMovies) => preVisibleMovies + 7);
  };

  return (
    <Root>
      <Intro>
        Hello Movie
        提供最新上映電影訂閱服務，可依喜好電影類型訂閱，即時獲取最新電影資訊！
      </Intro>
      <MovieContainer>
        {movies.slice(0, visibleMovies).map((movie) => (
          <Movie key={movie.id} movie={movie} />
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
