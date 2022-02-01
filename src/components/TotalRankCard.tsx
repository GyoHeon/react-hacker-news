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
  width: ${(props) => props.theme.totalRank.width}px;
  height: ${(props) => props.theme.totalRank.height}px;
  margin: ${(props) => props.theme.totalRank.margin};
  padding: ${(props) => props.theme.totalRank.padding};
  box-sizing: ${(props) => props.theme.totalRank.boxSizing}px;
  background: ${(props) => props.theme.totalRank.background};
  border: ${(props) => props.theme.totalRank.border};
  box-shadow: ${(props) => props.theme.totalRank.mainShadow};
  border-radius: 24px;
  position: relative;
  h2 {
    color: ${(props) => props.theme.accentColor};
    font-size: 28px;
    font-style: italic;
  }
  p {
    color: ${(props) => props.theme.textAuthorColor};
    width: 140px;
    font-size: 18px;
    font-weight: 500;
    margin-top: 12px;
    line-height: 24px;
  }
  span {
    color: ${(props) => props.theme.textAuthorColor};
    display: inline-block;
    text-align: center;
    font-size: 12px;
    width: 160px;
    position: absolute;
    bottom: 16px;
  }
`;
const Shadow = styled.div`
  width: ${(props) => props.theme.totalRank.width}px;
  height: ${(props) => props.theme.totalRank.height}px;
  margin: ${(props) => props.theme.totalRank.margin};
  box-shadow: ${(props) => props.theme.totalRank.sideShadow};
  border-radius: 24px;
  position: absolute;
  z-index: 9;
`;

export default TotalRankCard;
