import styled from "styled-components";
import TotalRankCard from "./TotalRankCard";

function TotalRank() {
  return (
    <Total>
      <h1>
        Total <br /> Ranking 5 Now
      </h1>
      <section>
        <TotalRankCard />
      </section>
    </Total>
  );
}

const Total = styled.section`
  width: 100%;
  height: 539px;
  h1 {
    display: inline-block;
    width: 335px;
    height: 56px;
    font-size: 28px;
    margin: 32px 20px 24px;
  }
  section {
    height: 427px;
    padding-top: 54px;
    background-color: #f2f3f7;
  }
`;

export default TotalRank;
