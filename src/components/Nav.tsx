import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
    <Navbar>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "")}
        to="/News"
      >
        News
        <BottomLine />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "")}
        to="/Show"
      >
        Show
        <BottomLine />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "")}
        to="/Ask"
      >
        Ask
        <BottomLine />
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "selected" : "")}
        to="/Jobs"
      >
        Jobs
        <BottomLine />
      </NavLink>
    </Navbar>
  );
}

const BottomLine = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 4px;
  background-color: #f0f0f6;
`;
const Navbar = styled.nav`
  width: 335px;
  height: 40px;
  margin: 0 auto;
  a {
    color: ${(props) => props.theme.textMenuColor};
    text-align: center;
    font-size: 18px;
    display: inline-block;
    width: 83.75px;
    height: 24px;
    margin: 12px 0 4px 0;
    &.selected {
      color: ${(props) => props.theme.accentColor};
      font-weight: 500;
    }
    &.selected div {
      height: 2px;
      background-color: ${(props) => props.theme.accentColor};
      border-radius: 2px 2px 0 0;
    }
  }
`;

export default Nav;
