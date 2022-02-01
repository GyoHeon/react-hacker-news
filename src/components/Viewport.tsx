import styled from "styled-components";

function Viewport({ children }: any) {
  return <View>{children}</View>;
}

const View = styled.div`
  width: 100%;
  height: 768px;
  border: 1px solid violet;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default Viewport;
