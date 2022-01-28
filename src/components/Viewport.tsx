import styled from "styled-components";

function Viewport({ children }: any) {
  return <View>{children}</View>;
}

const View = styled.div`
  background-color: violet;
  width: 100%;
  height: 768px;
`;

export default Viewport;
