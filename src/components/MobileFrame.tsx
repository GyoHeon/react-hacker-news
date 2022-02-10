import styled from "styled-components";

function MobileFrame({ children }: any) {
  return <MobileFullFrame>{children}</MobileFullFrame>;
}

const MobileFullFrame = styled.div`
  max-width: 375px;
  width: 100%;
  max-height: 768px;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default MobileFrame;
