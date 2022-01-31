import styled from "styled-components";
import ListTop from "./ListTop";
import ListItem from "./ListItem";

function List({ children }: any) {
  return (
    <>
      <ListTop />
      <Ul>
        <ListItem />
        {children}
      </Ul>
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
