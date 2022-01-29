import styled from "styled-components";

function TotalRankCard() {
  return (
    <>
      <Shadow />
      <Card>
        <h2>01</h2>
        <p>How much did a tunic const in the Roman Empire? (2021)</p>
        <span>bryanrasmussen</span>
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
  background: linear-gradient(158.71deg, #e8ebf2 2.84%, #f2f3f7 97.53%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 10px 10px 30px rgba(15, 41, 107, 0.12);
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
  background-color: #ffffff;
  margin: -10px 98px 83px 77px;
  filter: blur(20px);
  position: absolute;
`;

export default TotalRankCard;
