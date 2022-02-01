import styled from "styled-components";

type AData = {
  by: string;
  id: number;
  score: number;
  text: string;
  title: string;
};

function ListItem({ by, score, title }: AData) {
  return (
    <Li>
      <h1>{title}</h1>
      <section>
        <div className="author">
          <span>{by}</span>
          <img src="image/rightArrow.png" alt="right arrow" />
        </div>
        <div className="side">
          <div className="point">
            <img alt="point" />
            {score}
          </div>
          <div className="comment">
            <img alt="comment" />
            1000
          </div>
        </div>
      </section>
    </Li>
  );
}

const Li = styled.li`
  background-color: ${(props) => props.theme.listItem.backgroundColor};
  width: 335px;
  border-radius: 16px;
  padding: 16px 16px 12px;
  margin: 0 20px 12px;
  box-shadow: ${(props) => props.theme.listItem.shadow};
  h1 {
    color: ${(props) => props.theme.textColor};
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid ${(props) => props.theme.listItem.line};
  }
  section {
    margin-top: 8px;
    height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .author {
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 16px;
      color: ${(props) => props.theme.listItem.textAuthor};
      img {
        width: 6px;
        margin-left: 6px;
      }
    }
    .side {
      display: flex;
      font-size: 12px;
      line-height: 16px;
      img {
        width: 16px;
        height: 16px;
        margin: 0 2px;
      }
      div {
        display: flex;
        align-items: center;
        margin-left: 8px;
      }
      .point {
        color: ${(props) => props.theme.listItem.textComment};
        img {
          content: url(${(props) => props.theme.listItem.btnComment});
        }
      }
      .comment {
        color: ${(props) => props.theme.accentColor};
        img {
          content: url(${(props) => props.theme.listItem.btnPoint});
        }
      }
    }
  }
`;

export default ListItem;
