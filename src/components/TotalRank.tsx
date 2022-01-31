import styled from "styled-components";
import TotalRankCard from "./TotalRankCard";

function TotalRank() {
  return (
    <Total>
      <h1>
        Current <br /> Total Top 5
      </h1>
      <section>
        <TotalRankCard />
      </section>
    </Total>
  );
}

const Total = styled.section`
  width: 100%;
  h1 {
    @font-face {
      font-family: "Times New Roman", Times, serif;
      src: url("/public/times.ttf");
    }
    font-family: "Times New Roman";
    font-weight: 400;
    display: inline-block;
    width: 335px;
    font-size: 32px;
    line-height: 40px;
    margin: 36px 20px 24px;
  }
  section {
    height: 427px;
    padding-top: 54px;
    background-color: #f2f3f7;
  }
`;

export default TotalRank;
