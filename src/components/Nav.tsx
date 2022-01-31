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
        to="/News"
      >
        News
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
        to="/Ask"
      >
        Ask
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
  margin-top: 4px;
  background-color: ${(props) => props.theme.listColor};
  &.isHome {
    background-color: ${(props) => props.theme.accentColor};
  }
`;
const Navbar = styled.nav`
  width: 335px;
  height: 40px;
  margin: 0 auto 20px auto;
  a {
    color: ${(props) => props.theme.textMenuColor};
    text-align: center;
    font-size: 18px;
    display: inline-block;
    width: 83.75px;
    height: 24px;
    margin: 17px 0 4px 0;

    &.selected {
      color: ${(props) => props.theme.accentColor};
      font-weight: 500;
    }
    &.selected div {
      height: 2px;
      background-color: ${(props) => props.theme.accentColor};
      border-radius: 2px 2px 0 0;
      margin-top: 3px;
    }
  }
`;

export default Nav;
