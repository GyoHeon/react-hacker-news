import styled from "styled-components";
import ListTop from "./ListTop";
import ListItem from "./ListItem";

type ADatas = {
  by: string;
  id: number;
  score: number;
  text: string;
  title: string;
};

function List({ datas }: any) {
  return (
    <>
      <ListTop />
      <Ul>
        {datas.map((data: ADatas) => (
          <ListItem
            key={data.id}
            by={data.by}
            id={data.id}
            score={data.score}
            text={data.text}
            title={data.title}
          ></ListItem>
        ))}{" "}
      </Ul>
    </>
  );
}

const Ul = styled.ul`
  max-width: 375px;
  width: 100%;
  height: 606px;
  overflow: scroll;
`;

export default List;
