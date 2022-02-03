import styled from "styled-components";
import ListTop from "./ListTop";
import ListItem from "./ListItem";
import { useSort } from "../context/SortProvider";

type ADatas = {
  descendants: number;
  id: number;
  score: number;
  time: number;
  text: string;
  by: string;
  title: string;
  url?: string;
};

function List({ datas }: any) {
  const [SortMode, newSort, topSort] = useSort();

  return (
    <>
      <ListTop newSort={newSort} topSort={topSort} mode={SortMode} />
      <Ul>
        {datas.map((data: ADatas, index: number) => (
          <ListItem
            key={data.id}
            index={index}
            descendants={data.descendants}
            by={data.by}
            id={data.id}
            score={data.score}
            time={data.time}
            text={data.text}
            title={data.title}
            url={data.url}
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
