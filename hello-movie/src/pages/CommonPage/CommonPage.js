import { useState } from "react";
import styled from "styled-components";
import IntroPage from "../IntroPage";

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
`;
const CardTop = styled.img`
  width: 90%;
  margin: 5%;
  background: lightgrey;
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
  width: 100%;
  word-wrap: break-word;
`;
const CardInfo = styled.div`
  width: 40%;
  text-align: center;
  padding: 20px 20px 0px;
  margin: 0 auto;
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

function Movie({ setIntro, movie, display, setIntroDisplay }) {
  const handleShowDetails = () => {
    setIntro(movie);
    setIntroDisplay(!display);
  };
  return (
    <Card>
      <CardTop src={movie.imgSrc}></CardTop>
      <CardBottom>
        <CardTitle>{movie.name}</CardTitle>
        <CardInfo>
          <Button onClick={handleShowDetails}>詳細資訊</Button>
        </CardInfo>
      </CardBottom>
    </Card>
  );
}

export default function CommonPage({ movies }) {
  const [visibleMovies, setvisibleMovies] = useState(9);
  const [intro, setIntro] = useState({});
  const [display, setIntroDisplay] = useState(false);

  const handleShowMoreMovies = () => {
    setvisibleMovies((preVisibleMovies) => preVisibleMovies + 6);
  };

  return (
    <Root>
      {display ? (
        <IntroPage
          intro={intro}
          display={display}
          setIntroDisplay={setIntroDisplay}
        />
      ) : null}
      <MovieContainer>
        {movies.slice(0, visibleMovies).map((movie) => (
          <Movie
            setIntro={setIntro}
            display={display}
            setIntroDisplay={setIntroDisplay}
            key={movie.id}
            movie={movie}
          />
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