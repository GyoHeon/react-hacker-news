import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import TotalRank from "../components/TotalRank";

function Home() {
  return (
    <Viewport>
      <Header />
      <Nav />
      <TotalRank />
    </Viewport>
  );
}

const TestMenu = styled.div`
  background-color: violet;
  width: 100%;
  height: 768px;
`;

export default Home;
