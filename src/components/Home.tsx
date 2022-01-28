import styled from "styled-components";
import Header from "./Header";
import Nav from "./Nav";
import TotalRank from "./TotalRank";

const TestMenu = styled.div`
  width: 375px;
  height: 768px;
  border: 1px solid tomato;
`;

function Home() {
  return (
    <TestMenu>
      <Header />
      <Nav />
      <TotalRank />
    </TestMenu>
  );
}

export default Home;
