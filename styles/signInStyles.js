import styled from "styled-components";
import { colors, flexDisplayCenter } from "../components/common/tokens";
import Image from "next/image";

export const LoginPageContainer = styled.div`
  ${flexDisplayCenter()};
  margin-top: 10%;
`;

export const LoginCard = styled.div`
  ${flexDisplayCenter()};

  background: white;
  padding: 1.75em 1.75em 2em;
  flex-direction: column;
  margin: 10px 20px;
  border-radius: 6px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 ${colors.pageShadow};
  transition: transform 0.15s ease-in-out;
  justify-content: space-between;
  width: 500px;
  height: 350px;
`;

export const StyledGoogleLogo = styled(Image)`
  margin: 20px;
  border: solid 2px red;
`;

export const GoogleSignInButton = styled.button`
  ${flexDisplayCenter()};
  height: 60px;
  background-color: #fff;
  color: #868686;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #ddd;
  padding-top: 16px;
  padding-bottom: 13px;
  font-weight: 400;
  font-size: 18px;
  transition: box-shadow 0.5s;
  box-shadow: 0 1px 1px 0 ${colors.pageShadow};
  width: 250px;

  > span {
    margin-left: 12px;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 2px 1px 0 ${colors.pageShadow};
  }
`;
