import styled from "styled-components";
import { colors } from "../../common/tokens";
import Image from "next/image";

export const EventCardContainer = styled.div`
  display: flex;
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

  :hover {
    /* box-shadow: 0 1px 7px ${colors.pageShadow};
    transform: translateY(-5px); */
    cursor: pointer;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 4px;
  object-fit: cover;
`;
