import { useEffect, useState } from "react";
import { getLatestMovies } from "../../WebAPI";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieIntroContainer = styled.div`
  width: 99vw;
  height: 101vh;
  margin-top: -11%;
  position: fixed;
  background: #00000047;
  z-index: 98;
`;
const Card = styled.div`
  color: #545454;
  font-weight: bold;
  width: 70%;
  margin: 0px auto;
  font-family: "微軟正黑體";
  color: #545454;
  background: #a6d5db;
  position: fixed;
  z-index: 99;
  height: 556px;
  top: 13%;
  right: 15%;
  border-radius: 10px;
  display: flex;
  padding: 1%;
`

const Genre = styled.div`
  background-color: #5b80ac;
  width: auto;
  color: #545454;
  margin-bottom: 6%;
  margin-left: 4px;
  border-radius: 7px;
  position: relative;
  text-decoration: none;
  color: #fff;
  padding: 6px;
  cursor: pointer;
  white-space: nowrap;
`;
const CardLeft = styled.div`
  width: 30%;
`;
const CardRight = styled.div`
  width: 70%;  
  margin: 3% 1% 3% 5%;
  overflow-y: auto;
  &::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #ededea;
}
  &::-webkit-scrollbar {
  width: 12px;
  background-color: black;
}
  &::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #5b80ac;
}
`;
const CardTop = styled.div`
  width: 95%;
  display: flex;
`;
const CardBottom = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-flow: column;
  line-height: 2;
`;
const Poster = styled.img`
  width: 100%;
  margin: 10%;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: 90%;
  word-wrap: break-word;
`;
const ReleaseDate = styled.div`
  margin: 0 10%;
`
const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: initial;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px 16px;
  color: #5b80ac;
  font-size: 36px;
  line-height: 1.5;
`;
const Director = styled.div`
  
`;

const Rating = styled.div`
  
`;

const Runtime = styled.div`
`;

const Story = styled.div`
  width: 95%;
`;

const Actors = styled.div`
  display: inline;
`;
const ActorsContainer = styled.div`
  
`;
const Trailer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
`

function MovieIntro({ movie, display, setIntroDisplay }) {
  return (
    <Card>
      <CardLeft>
        <Poster src={movie.imgSrc}></Poster>
        <ReleaseDate>上映日期：{new Date(movie.releaseDate).toLocaleDateString()}</ReleaseDate>
      </CardLeft>
      <CardRight>
        <CardTop>
          <Title>{movie.name}</Title>
          {
            movie.genre.map(data => {
              return <Genre>{data.replaceAll("'", "")}</Genre>
            })
          }
          <CloseButton onClick={() => {
            setIntroDisplay(!display);
          }}>×</CloseButton>
        </CardTop>
        <CardBottom>
          <ActorsContainer>演員：{movie.actors.map(data => {
            return <Actors>{data + ", "}</Actors>
          })}</ActorsContainer>
          <Director>導演：{movie.director}</Director>
          <Runtime>片長：{movie.runtime}</Runtime>
          <Rating>IMDb 分數：{movie.imdbRating}</Rating>
          <hr></hr>
          <Story>劇情介紹：{movie.story.replaceAll("\r\n", "<br />")}</Story>
          <hr></hr>
          {
            (movie.trailer.indexOf('youtube.com') === 12) ? <Trailer><iframe width="640" height="360" src={movie.trailer}></iframe></Trailer> : null
          }
        </CardBottom>
      </CardRight>
    </Card>
  )
}

export default function IntroPage({ intro, display, setIntroDisplay }) {

  return (
    <MovieIntroContainer>
      <MovieIntro key={intro.id} movie={intro} display={display} setIntroDisplay={setIntroDisplay} />
    </MovieIntroContainer>
  );
}