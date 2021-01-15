import { useEffect, useState } from "react";
import { getLatestMovies } from "../../WebAPI";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_XL
} from "../../constants/style";

const MovieIntroContainer = styled.div`
  width: 100vw;
  height: 400vh;
  margin-top: -100%;
  position: fixed;
  background: #00000047;
  z-index: 98;
  transition: opacity 0.5s;
`;
const Card = styled.div`
  color: #545454;
  font-weight: bold;
  width: 70%;
  margin: 0px auto;
  font-family: "sans-serif", "微軟正黑體";
  background: #a6d5db;
  position: fixed;
  z-index: 99;
  height: 80vh;
  top: 13%;
  right: 15%;
  border-radius: 10px;
  display: flex;
  padding: 1%;
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
  ${MEDIA_QUERY_XL} {
    top:10%;
    height: 85vh;
  }
  ${MEDIA_QUERY_LG} {
    padding: 2%;
  }
  ${MEDIA_QUERY_MD}{
    top: 12%;
    right: 5%;
    width: 90%;
    height: 80vh;
    padding: 1%;  
    flex-wrap: wrap;
  }
  ${MEDIA_QUERY_SM}{
    overflow-y: auto;
  }
`

const CardLeft = styled.div`
  width: 30%;
  ${MEDIA_QUERY_MD}{
    width: 100%;
    img{
      display: none;
    }
  }
`;

const CardRight = styled.div`
  width: 70%;  
  margin: 5% 1% 3% 5%;
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
  ${MEDIA_QUERY_MD} {
    overflow-y: initial;
    width: 100%;
  }
`;

const CardTop = styled.div`
  width: 95%;
  display: flex;
  ${MEDIA_QUERY_SM}{
    flex-wrap: wrap;
  }
`;

const CardBottom = styled.div`
  width: 95%;
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

const Genre = styled.div`
  background-color: #5b80ac;
  width: auto;
  color: #545454;
  margin: 1% 0 6% 4px;
  border-radius: 7px;
  position: relative;
  text-decoration: none;
  color: #fff;
  padding: 6px;
  cursor: pointer;
  white-space: nowrap;
  ${MEDIA_QUERY_SM}{
    margin: 3% 4px 3% 0px;
  }
`;

const ReleaseDate = styled.div`
  margin: 0 10%;
  & span{
    color: #5b80ac;
  }
  ${MEDIA_QUERY_MD}{
    margin: 5% 5% 0;
  }
`
const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: initial;
  border: none;
  cursor: pointer;
  padding: 0px 16px;
  color: #5b80ac;
  font-size: 36px;
  line-height: 1.5;
  &:focus{
    outline: none;
  }
`;

const Director = styled.div`
  & span{
    color: #5b80ac;
  }
`;

const Rating = styled.div`
  & span{
    color: #5b80ac;
  }  
`;

const Runtime = styled.div`
  & span{
    color: #5b80ac;
  }
`;

const Story = styled.div`
  word-wrap: break-word;
  white-space: pre-line;
  & span{
    color: #5b80ac;
  }
`;

const Actors = styled.div`
  display: inline;  
`;

const ActorsContainer = styled.div`
  & span{
    color: #5b80ac;
  }
`;

const Trailer = styled.div`
  position: relative;
  padding-bottom: 60%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  iframe{
    width: 100%;
  }
  ${MEDIA_QUERY_LG}{
    iframe{
      height: 240px;
    }
  }
  ${MEDIA_QUERY_MD}{
    iframe{
      height: 300px;
    }
  }
`

function MovieIntro({ movie, display, setIntroDisplay }) {
  return (
    <Card>
      <CardLeft>
        <Poster src={movie.imgSrc}></Poster>
        <ReleaseDate><span>上映日期：</span>{new Date(movie.releaseDate).toLocaleDateString()}</ReleaseDate>
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
          <ActorsContainer><span>演員：</span>{movie.actors.map((data, index, actorsArray) => {
            return (actorsArray.length - index > 1) ? <Actors>{data + ", "}</Actors> : <Actors>{data}</Actors>
          })}</ActorsContainer>
          <Director><span>導演：</span>{movie.director}</Director>
          <Runtime><span>片長：</span>{movie.runtime}</Runtime>
          <Rating><span>IMDb 分數：</span>{movie.imdbRating}</Rating>
          <hr></hr>
          <Story><span>劇情介紹：</span>{movie.story}</Story>
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