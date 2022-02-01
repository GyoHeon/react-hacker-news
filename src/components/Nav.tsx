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

const BottomLine = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 7px;
  background-color: ${(props) => props.theme.nav.line};
  &.isHome {
    background-color: ${(props) => props.theme.accentColor};
  }
`;
const Navbar = styled.nav`
  width: 335px;
  height: 40px;
  margin: 0 auto;
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
      height: 2px;
      background-color: ${(props) => props.theme.accentColor};
      border-radius: 2px 2px 0 0;
      margin-top: 6px;
    }
  }
`;

export default Nav;
