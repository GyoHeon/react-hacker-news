import styled from "styled-components";

function Comment() {
  return (
    <>
      <CommentHead>
        <div></div>
      </CommentHead>
      <List></List>
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
  border-top: 1px solid ${(props) => props.theme.nav.line}; ;
`;

export default Comment;
