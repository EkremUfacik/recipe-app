import { Link } from "react-router-dom";
import styled from "styled-components";
import Flex from "../../components/global/Flex.styled";

const Nav = styled.nav`
  padding: 1.5rem;
  background-color: #89b1d3d0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  overflow: hidden;
  /* position: fixed; */
  width: 100%;
  font-size: 18px;
  transition: height 1s;
  @media (max-width: 800px) {
    padding-bottom: 2.5rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    height: ${({ show }) => (show ? "0" : "250px")};
    /* height: 0; */
  }
`;

export const Menu = styled(Flex)`
  justify-content: space-around;
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 20px;
  cursor: pointer;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #265f5f;
  }
  & span {
    color: #6b1b7c;
    &:hover {
      color: #a42447;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 2rem;
  /* height: 0; */
  @media (max-width: 800px) {
    flex-direction: column;
  }

  & a {
    text-decoration: none;
    color: black;
  }
  & p {
    cursor: pointer;
  }

  & a:hover,
  & p:hover {
    color: #265f5f;
  }
`;

export default Nav;
