import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  return (
    <Navbar>
      <Link to="/News">News</Link>
      <Link to="/Show">Show</Link>
      <Link to="/Ask">Ask</Link>
      <Link to="/Jobs">Jobs</Link>
    </Navbar>
  );
}

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
    border-bottom: 1px solid #f0f0f6;
    margin: 12px 0 4px 0;
  }
`;

export default Nav;
