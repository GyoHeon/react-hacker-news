import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import TotalRank from "../components/TotalRank";

function Home() {
  return (
    <Viewport>
      <Header />
      <Nav isHome={true} />
      <TotalRank />
    </Viewport>
  );
}

export default Home;
