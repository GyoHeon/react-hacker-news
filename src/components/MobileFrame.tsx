import styled from "styled-components";

const MobileFullFrame = styled.div`
  max-width: 375px;
  width: 100%;
  max-height: 768px;
  height: 100%;
  margin: 100px auto;
`;

function MobileFrame({ children }: any) {
  return <MobileFullFrame>{children}</MobileFullFrame>;
}

export default MobileFrame;
