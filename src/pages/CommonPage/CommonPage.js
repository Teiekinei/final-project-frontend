import { useState, useEffect} from "react";
import styled from "styled-components";
import IntroPage from "../IntroPage";
import {
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
} from "../../constants/style";


const Root = styled.div`
  background-color: #ededea;
  width: 100%;
  min-height: 900px;
  margin: 0;
  ${MEDIA_QUERY_SM}{
    padding-top: 20px;
  }
`;
const MovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 10%;
  ${MEDIA_QUERY_LG} {
    margin-top: 5%;
  }
  ${MEDIA_QUERY_SM} {
    margin: 0;
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
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
  text-align: center;
  ${MEDIA_QUERY_LG} {
    width: 47%;
    margin-bottom: 3%;
  }
  ${MEDIA_QUERY_MD} {
    width: 47%;
    margin-bottom: 6%;
  }
  ${MEDIA_QUERY_SM} {
    width: 90%;
    margin: 3% auto;
  }
`;

const CardTop = styled.img`
  width: 90%;
  margin: 5%;
  height: 70%;
  max-height: 80vh;
  min-height: 300px;
  max-width: 300px;
  background: #c4e7e0;
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
  width: 55%;
  text-align: center;
  padding-top: 20px;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #5b80ac;
  border: none;
  outline: none;
  cursor: pointer;
  width: auto;
  white-space: nowrap;
  text-align: center;
  padding: 6px 12px;
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 3px;
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
  margin: 0 auto 2%;
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
  &:focus{
    outline: none;
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
