import styled from "styled-components";

type ADatas = {
  idx: number;
  title: string;
  by: string;
};

function TotalRankCard({ idx, title, by }: ADatas) {
  return (
    <>
      <Shadow />
      <Card>
        <h2>0{`${idx + 1}`}</h2>
        <p>{title}</p>
        <span>{by}</span>
      </Card>
    </>
  );
}

const Card = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 24px;
  margin: 0 88px 73px 87px;
  padding: 64px 20px 16px 20px;
  background: ${(props) => props.theme.totalRank.background};
  border: ${(props) => props.theme.totalRank.border};
  box-shadow: ${(props) => props.theme.totalRank.mainShadow};
  position: relative;
  h2 {
    font-size: 28px;
    font-style: italic;
    color: ${(props) => props.theme.accentColor};
  }
  p {
    width: 140px;
    font-size: 18px;
    font-weight: 500;
    margin-top: 12px;
    line-height: 24px;
    color: ${(props) => props.theme.textAuthorColor};
  }
  span {
    display: inline-block;
    text-align: center;
    font-size: 12px;
    width: 160px;
    position: absolute;
    bottom: 16px;
    color: ${(props) => props.theme.textAuthorColor};
  }
`;
const Shadow = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 24px;
  margin: 0 88px 73px 87px;
  box-shadow: ${(props) => props.theme.totalRank.sideShadow};
  position: absolute;
  z-index: 9;
`;

export default TotalRankCard;
