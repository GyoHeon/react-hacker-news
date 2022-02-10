import { NavLink } from "react-router-dom";
import styled from "styled-components";

type INav = {
  isHome?: boolean;
};

function Nav({ isHome = false }: INav) {
  return (
    <Navbar>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "")}
        to="/Article"
      >
        Article
        <BottomLine className={isHome ? "isHome" : ""} />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "")}
        to="/Ask"
      >
        Ask
        <BottomLine className={isHome ? "isHome" : ""} />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "")}
        to="/Show"
      >
        Show
        <BottomLine className={isHome ? "isHome" : ""} />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "")}
        to="/Jobs"
      >
        Jobs
        <BottomLine className={isHome ? "isHome" : ""} />
      </NavLink>
    </Navbar>
  );
}

const Navbar = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
  position: sticky;
  top: 0;
  z-index: 9;
  width: 375px;
  height: 40px;
  padding: 0 20px;
  a {
    color: ${(props) => props.theme.textAuthorColor};
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    display: inline-block;
    width: 83.75px;
    height: 24px;
    margin: 8px 0 4px 0;
    &.selected {
      color: ${(props) => props.theme.accentColor};
      font-weight: 500;
    }
    &.selected div {
      background-color: ${(props) => props.theme.accentColor};
      height: 2px;
      border-radius: 2px 2px 0 0;
      margin-top: 6px;
    }
  }
`;
const BottomLine = styled.div`
  background-color: ${(props) => props.theme.nav.line};
  width: 100%;
  height: 1px;
  margin-top: 7px;
  &.isHome {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

export default Nav;
