import styled from "styled-components";
import { Link } from "react-router-dom";

const Root = styled.div`
  background-color: #5b80ac;
  color: #fff;
  text-align: center;
  padding: 10px 0 15px;
  box-shadow: 0px -1px 1px rgba(0,0,0,0.3);
`;

const FooterMembers = styled.div`
  margin-bottom: 16px;
`;

const FooterMembersInfo = styled.p``;

const FooterMember = styled.a`
  color: #fff;
  transition: transform 0.5s;

  &:hover {
    color: #fff;
    
    border-bottom: 2px solid #ededea;
    text-decoration: none;
  }
  & + & {
    margin-left: 30px;
  }
`;

const Copyright = styled.div``;

export default function Footer() {
  return (
    <Root>
      <FooterMembers>
        <FooterMembersInfo>Made By</FooterMembersInfo>
        <FooterMember href="https://github.com/Teiekinei">Alina</FooterMember>
        <FooterMember href="https://github.com/JAS0NHUANG">Jason</FooterMember>
        <FooterMember href="https://github.com/CHANG-CHING-CHUNG">John</FooterMember>
        <FooterMember href="https://github.com/miluku1018">Miaohsien</FooterMember>
      </FooterMembers>
      <Copyright>Hello Movie © 2020 Copyright</Copyright>
    </Root>
  );
}
