import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchArticle } from "../api";

function Comment({ props }: any) {
  const [comments, setComments] = useState<object[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   async function loadComment(comment: object) {
  //     const visited: object[] = [];
  //     let needVisit: object[] = [];

  //     needVisit.push(comment);

  //     while (needVisit.length !== 0) {
  //       const node: object = needVisit.shift();
  //       if (!visited.includes(node)) {
  //         // 해당 노드가 탐색된 적 없다면
  //         visited.push(node);
  //         needVisit = [...graph[node], ...needVisit];
  //       }
  //     }
  //     return visited;
  //   }
  // }, [loading]);

  return (
    <>
      <CommentHead></CommentHead>
      <List>
        {props?.kids.map((prop: number, index: number) => (
          <ListItem key={index}>
            <header>
              <h1>test people</h1>
              <span>test time</span>
            </header>
            {prop}
          </ListItem>
        ))}
      </List>
    </>
  );
}

const CommentHead = styled.div`
  width: 100%;
  height: 64px;
  box-shadow: 0px -2px 16px rgba(0, 0, 0, 0.08);
  border-radius: 24px 24px 0px 0px;
  margin-top: 8px;
`;
const List = styled.ul`
  margin: 0 20px 0;
`;
const ListItem = styled.li`
  border-top: 1px solid ${(props) => props.theme.nav.line};
  color: ${(props) => props.theme.header.textTitle};
  font-size: 16px;
  line-height: 24px;
  padding: 16px 0;
  header {
    color: ${(props) => props.theme.listTop.text};
    padding: 16px 0 8px;
    display: flex;
    font-size: 12px;
    line-height: 16px;
    h1 {
      color: ${(props) => props.theme.accentColor};
      border: 1px solid ${(props) => props.theme.accentColor};
      padding: 0 12px;
      border-radius: 20px;
      margin-right: 8px;
    }
  }
`;

export default Comment;
