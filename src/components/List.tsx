import styled from "styled-components";
import ListTop from "./ListTop";

function List({ children }: any) {
  return (
    <>
      <ListTop />
      <Ul>{children}</Ul>
    </>
  );
}

const Ul = styled.ul`
  background-color: red;
  max-width: 335px;
  width: 100%;
  height: 606px;
  margin: 0 20px;
`;

export default List;
