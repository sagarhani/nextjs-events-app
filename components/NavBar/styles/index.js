import styled from "styled-components";
export const MenuLink = styled.span`
  padding-right: 32px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;

  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
`;

export const Nav = styled.div`
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  width: 100vw;
  position: sticky;
  /* margin: -60px; */
  top: 0;
  right: 0;
  left: 0px;
  background-color: #f6415f;
  z-index: 1000;
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 26px;

  span {
    font-weight: 300;
    font-size: 18px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: relative; */

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;

  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
