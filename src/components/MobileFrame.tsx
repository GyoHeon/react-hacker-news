import styled from "styled-components";

function MobileFrame({ children }: any) {
  return <MobileFullFrame>{children}</MobileFullFrame>;
}

const MobileFullFrame = styled.div`
  max-width: 375px;
  width: 100%;
  max-height: 768px;
  height: 100%;
  margin: 100px auto 0;
`;

export default MobileFrame;
