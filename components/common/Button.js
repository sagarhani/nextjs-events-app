import styled from "styled-components";
import { colors, flexDisplayCenter } from "./tokens";

export const Button = styled.button`
  background-color: ${colors.primary};
  padding: 12px 24px;
  border-radius: 4px;
  color: ${colors.secondary};
  font-size: 18px;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(130deg, #fc4c6a, ${colors.primary});
  height: 48px;
  border: 1px solid transparent;
  transition: box-shadow 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    box-shadow: 0 3px 5px 0 rgb(51 60 77 / 25%);
  }
`;
