import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ReactComponent as EmailIcon } from './email-white-24dp.svg';
import { ReactComponent as MovieIcon } from './movie-white-24dp.svg';
import { ReactComponent as SendIcon } from './send-white-24dp.svg';
import { useSpring } from "react-spring";

const Navbar = styled.div`
  position: fixed;
  z-index: 2;
  float: left;
  background-color: #5b80ac;
  width: 100%;
  display: flex;
  align-content: center;
  padding: 8px 16px;
`;

const MovieCategory = styled.div`
  background-color: #f4c4c2;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  text-align: center;
  font-weight: bold;
  margin-top: 6rem;
  margin-left: -40px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  float: left;
  position: fixed;
  z-index: 99;
  transition: margin-left 0.5s;
  &:hover {
    margin-left: -20px;
  }
`;

const Brand = styled(Link)`
  position: absolute;
  margin: 0 0 0 2%;
  font-family: "Source Code Pro";
  text-decoration: none;
  color: #fff;
`;

const BrandName = styled.h1`
  background: linear-gradient(90deg, #00e1ff 0%, #fff 100%);
  background-position: 100% 100%;
  animation: bgSize 0.74s infinite linear alternate;
  display: inline;
`;

const MaterialIcons = styled.div`
  color: #fff;
  display: inline-block;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
`;

const SubscribeButton = styled.button`
  float: right;
  margin-left: 88%;
  padding: 13px 25px 14px;
  background-color: #ededea;
  font-size: 18px;
  font-weight: bold;
  color: #5b80ac;
  border-radius: 10px;
  border-width: 0;
  border-color: initial;
  cursor: pointer;
  &:hover {
    background-color: #a6d5db;
    color: #fff;
  }
`;

const NavbarNav = styled.ul`
  display: block;
  padding-left: 20px;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0px;
  padding: 10px;
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
  const sendAnime = useSpring({
    loop: true,
    from: { x: 0 },
    to: { x: 180 },
  });

  return (
    <Navbar>
      <Brand to="/">
        <MaterialIcons style={sendAnime}><SendIcon /></MaterialIcons>
        <MaterialIcons><MovieIcon /></MaterialIcons>
        <BrandName>Hello Movie</BrandName>
        <MaterialIcons><EmailIcon /></MaterialIcons>
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
          <NavItem>
            <Nav to="/order">我要訂閱</Nav>
          </NavItem>
        </NavbarNav>
      </MovieCategory>
    </Navbar>
  );
}
