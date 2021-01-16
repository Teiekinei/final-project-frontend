import styled from "styled-components";
import { Link } from "react-router-dom";

const Root = styled.div`
  background-color: #5b80ac;
  color: #fff;
  text-align: center;
  padding: 10px 0 15px;
`;

const FooterMembers = styled.div`
  margin-bottom: 16px;
`;

const FooterMembersInfo = styled.p``;

const FooterMember = styled(Link)`
  color: #fff;

  &:hover {
    color: #fff;
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
        <FooterMember>Member 1</FooterMember>
        <FooterMember>Member 2</FooterMember>
        <FooterMember>Member 3</FooterMember>
        <FooterMember>Member 4</FooterMember>
      </FooterMembers>
      <Copyright>Hello Movie © 2020 Copyright</Copyright>
    </Root>
  );
}
