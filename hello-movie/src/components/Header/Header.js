import styled, { keyframes } from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { SubscribeButton } from "../SubscribeBtn";
import { ReactComponent as SendIcon } from "./send-white-24dp.svg"
import { ReactComponent as EmailIcon } from "./email-white-24dp.svg"
import { ReactComponent as MovieIcon } from "./movie-white-24dp.svg"
import { MEDIA_QUERY_SM, MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "../../constants/style";

const Navbar = styled.div`
  position: fixed;
  z-index: 2;
  float: left;
  background-color: #5b80ac;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: start;
  align-content: center;
  padding: 8px 16px;
`;

const MovieCategory = styled.div`
  background-color: #f4c4c2;
  border-top-right-radius: 30px;
  text-align: center;
  font-weight: bold;
  margin-top: 6rem;
  margin-left: -40px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;
  z-index: 99;
  transition: margin-left 0.5s;
  &:hover {
    margin-left: -20px;
  }
  ${MEDIA_QUERY_LG} {
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    justify-content: start;
    position: fixed;
    width: 100%;
    margin-top: 62px;
    margin-left: -17px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    &:hover {
      margin-left: -17px;
  }
`;

const flying = keyframes`
  0% { left: 0px; z-index:-99; }
  5% { z-index: 99; }
  95% { z-index:99; }
  100% { left: 270px; z-index:-99;}
`;

const Brand = styled(Link)`
  position: absolute;
  width: 100%;
  margin-left: 1%;
  // font-family: "Source Code Pro";
  text-decoration: none;
  color: #fff;
  &:hover{
    text-decoration: none;
  }
  svg {
    transform: scale(1.4, 1.4);
    margin: 1% 0% 2% 0%;
  }
  svg:nth-child(1){
    position: absolute;
    transform: scale(1.3, 1.3);
    top: 8px;  
    animation: ${flying} 1s linear infinite;
  }
  ${MEDIA_QUERY_LG} {
    margin-left: 10%;
  }
  ${MEDIA_QUERY_SM} {
  }
`;

const moving = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -100% 0; }
`;

const BrandName = styled.h1`
  background: linear-gradient(90deg, #fff 0%, #00e1ff 50%, #fff 100%);
  background-position: 100% 100%;
  margin: 0 2%;
  display: inline-block;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-background-size: 200% 100%;
  animation: ${moving} 2s linear infinite;
`;

const NavbarNav = styled.ul`
  display: block;
  padding-left: 20px;
  list-style: none;
  ${MEDIA_QUERY_LG} {
    margin: 0 auto;
    padding-left: 30px;
  }
`;

const NavItem = styled.li`
  margin: 0px;
  padding: 10px;
  ${MEDIA_QUERY_LG}{
    display: inline;
  }
`;

const Nav = styled(Link)`
  text-decoration: none;
  color: #5b80ac;
  &:hover {
    color: #818787;
    border-bottom: 3px solid #818787;
  }
`;

export default function Header() {
  return (
    <Navbar>
      <Brand to="/">
        <SendIcon />
        <MovieIcon />
        <BrandName>Hello Movie</BrandName>
        <EmailIcon />
      </Brand>
      <SubscribeButton>我要訂閱</SubscribeButton>
      <MovieCategory>
        <NavbarNav>
          <NavItem>
            <Nav to="/actions">動作</Nav>
          </NavItem>
          <NavItem>
            <Nav to="/adventure">冒險</Nav>
          </NavItem>
          <NavItem>
            <Nav to="/comedy">喜劇</Nav>
          </NavItem>
          <NavItem>
            <Nav to="/drama">劇情</Nav>
          </NavItem>
          <NavItem>
            <Nav to="/horror">恐怖</Nav>
          </NavItem>
          <NavItem>
            <Nav to="/fantasy">奇幻</Nav>
          </NavItem>
          <NavItem>
            <Nav to="/romance">愛情</Nav>
          </NavItem>
          <NavItem>
            <Nav to="/animation">動畫</Nav>
          </NavItem>
          <NavItem>
            <Nav to="/thriller">驚悚</Nav>
          </NavItem>
          <NavItem>
            <Nav to="/suspense">懸疑</Nav>
          </NavItem>
          <NavItem>
            <Nav to="/sci-fi">科幻</Nav>
          </NavItem>
          <NavItem>
            <Nav to="/musical">歌舞劇</Nav>
          </NavItem>
        </NavbarNav>
      </MovieCategory>
    </Navbar>
  );
}
