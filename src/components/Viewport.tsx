import styled from "styled-components";

function Viewport({ children }: any) {
  return <View>{children}</View>;
}

const View = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 768px;
  overflow: scroll;
  position: relative;
`;

export default Viewport;
