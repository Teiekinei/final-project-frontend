import styled, { keyframes } from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { SubscribeButton } from "../SubscribeBtn";
import { ReactComponent as SendIcon } from "./send-white-24dp.svg"
import { ReactComponent as EmailIcon } from "./email-white-24dp.svg"
import { ReactComponent as MovieIcon } from "./movie-white-24dp.svg"
import { MEDIA_QUERY_SM, MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "../../constants/style";

const Navbar = styled.div`
  position: fixed;
  z-index: 98;
  background-color: #5b80ac;
  margin: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: start;
  align-content: center;
  padding: 8px 16px;
  box-shadow: 0px 1px 1px rgba(0,0,0,0.3);
  ${MEDIA_QUERY_SM} {
    justify-content: center;
  }
`;

const MovieCategory = styled.div`
  background-color: #f4c4c2;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  text-align: center;
  font-weight: bold;
  margin-top: 6rem;
  margin-left: -60px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;
  z-index: 99;
  transition: margin-left 0.5s;  
  box-shadow: 2px 2px 3px rgba(0,0,0,0.3);
  &:hover {
    margin-left: -40px;
  }
  ${MEDIA_QUERY_LG} {
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
    justify-content: start;
    position: fixed;
    width: 100%;
    margin-top: 62px;
    margin-left: -16px;
    padding: 10px 0;  
    box-shadow: 0px 1px 2px rgba(0,0,0,0.3);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    &::-webkit-scrollbar {
      height: 0.01px;
      background-color: initial;
    }
    &:hover {
      margin-left: -16px;
    }
  }
  ${MEDIA_QUERY_SM} {  
    margin-left: 0px;
    &:hover {
      margin-left: 0px;
    }
  }
`;

const flying = keyframes`
  0% {left: 0px; opacity: 0;}
  1% {opacity: 0.4;}
  10% {top: -10px;}
  20% {top: 10px; left: 270px; opacity: 0;}
  
  30% {left: 0px; opacity:0;}
  31% {opacity: 0.8;}
  38% {top: 20px;}
  42% {top: 0px;}
  50% {top: 10px; left: 270px; opacity:0;}

  60% {left: 0px; opacity:0;}
  61% {opacity: 0.6;}
  70% {top: 10px; left: 270px; opacity:0;}

  80% {left: 0px; opacity:0;}
  81% {opacity: 0.7;}
  90% {top: 0px;}
  94% {top: 20px;}
  100% {top: 10px; left: 270px; opacity:0;}
`;

const Brand = styled(Link)`
  position: absolute;
  width: 60%;
  margin-left: 1%;
  // font-family: "Source Code Pro";
  text-decoration: none;
  white-space: nowrap;
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
    transform: scale(1.1, 1.1);
    top: 10px;  
    animation: ${flying} 12s ease-in-out infinite;
  }
  ${MEDIA_QUERY_LG} {
  }
  ${MEDIA_QUERY_SM} {
    width: auto;
    margin: auto;
    svg{
      display: none;
    }
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
  list-style: none;
  ${MEDIA_QUERY_LG} {
    margin: 0 auto;
  }
  ${MEDIA_QUERY_SM} {
    padding-left: 100px;
    padding-right: 10px;
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
    text-decoration: none;
  }

  ${(props) =>
    props.$active &&
    `
    color: #818787;
    border-bottom: 3px solid #818787;
  `}
`;

export default function Header() {
  const location = useLocation();
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
            <Nav to="/action" $active={location.pathname === "/action"}>
              動作
            </Nav>
          </NavItem>
          <NavItem>
            <Nav to="/drama" $active={location.pathname === "/drama"}>
              劇情
            </Nav>
          </NavItem>
          <NavItem>
            <Nav to="/crime" $active={location.pathname === "/crime"}>
              犯罪
            </Nav>
          </NavItem>
          <NavItem>
            <Nav to="/fantasy" $active={location.pathname === "/fantasy"}>
              奇幻
            </Nav>
          </NavItem>
          <NavItem>
            <Nav to="/romance" $active={location.pathname === "/romance"}>
              愛情/溫馨
            </Nav>
          </NavItem>
          <NavItem>
            <Nav to="/animation" $active={location.pathname === "/animation"}>
              動畫
            </Nav>
          </NavItem>
          <NavItem>
            <Nav to="/documentary" $active={location.pathname === "/documentary"}>
              紀錄片
            </Nav>
          </NavItem>
        </NavbarNav>
      </MovieCategory>
    </Navbar>
  );
}
