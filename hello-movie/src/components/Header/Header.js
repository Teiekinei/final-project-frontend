import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { SubscribeButton } from "../SubscribeBtn";

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
        <MaterialIcons>send</MaterialIcons>
        <MaterialIcons>movie</MaterialIcons>
        <BrandName>Hello Movie</BrandName>
        <MaterialIcons>email</MaterialIcons>
      </Brand>
      <SubscribeButton>我要訂閱</SubscribeButton>
      <MovieCategory>
        <NavbarNav>
          <NavItem>
            <Nav to="/actions" $active={location.pathname === "/actions"}>
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
            <Nav
              to="/documentary"
              $active={location.pathname === "/documentary"}
            >
              紀錄片
            </Nav>
          </NavItem>
          <NavItem>
            <Nav to="/order">我要訂閱</Nav>
          </NavItem>
        </NavbarNav>
      </MovieCategory>
    </Navbar>
  );
}
