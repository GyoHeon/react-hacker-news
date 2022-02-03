import styled from "styled-components";
import ReactSlider from "react-slider";
import { useState } from "react";

type AData = {
  by: string,
  descendants: number,
  id: number,
  score: number,
  text: string,
  title: string,
};

function ListItem({ by, score, title, descendants }: AData) {
  const [value, setValue] = useState(50);
  const [listHeight, setListHeight] = useState(0);

  const getListSize = () => {
    const newHeight = ListIt.current.clientHeight;
    setListHeight(newHeight);
  };

  const Thumb = (props, state) => (
    <StyledThumb {...props}>
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
            {descendants}
          </div>
        </div>
      </section>
    </StyledThumb>
  );

  return (
    <li>
      <StyledContainer>
        <ListIt
          value={value}
          onBeforeChange={(value, index) =>
            console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
          }
          onChange={(value, index) =>
            console.log(`onChange: ${JSON.stringify({ value, index })}`)
          }
          onAfterChange={(value, index) =>
            console.log(`onAfterChange: ${JSON.stringify({ value, index })}`)
          }
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderTrack={Track}
          renderThumb={Thumb}
        ></ListIt>
      </StyledContainer>
    </li>
  );
}

const StyledContainer = styled.div`
  overflow: hidden;
  width: 335px;
  margin: 8px 20px 4px;
  position: relative;
  border-radius: 16px;
  height: 100px;
`;
const ListIt = styled(ReactSlider)`
  height: 100px;
  width: 519px;
  margin: 0 0 12px;
  position: absolute;
  overflow: hidden;
  right: 92px;
`;
const StyledTrack = styled.div`
  height: 100%;
  width: 519px;
  background: ${(props) => (props.index === 0 ? "#FF6600" : "#AFD8D8")};
  border-radius: 16px;
`;
const StyledThumb = styled.div`
  background-color: ${(props) => props.theme.listItem.backgroundColor};
  box-shadow: ${(props) => props.theme.listItem.shadow};
  width: 335px;
  border-radius: 16px;
  padding: 16px 16px 12px;
  cursor: grab;
  h1 {
    color: ${(props) => props.theme.textColor};
    border-bottom: 1px solid ${(props) => props.theme.listItem.line};
    font-size: 18px;
    line-height: 24px;
    padding-bottom: 12px;
  }
  section {
    margin-top: 8px;
    height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .author {
      color: ${(props) => props.theme.listItem.textAuthor};
      display: flex;
      align-items: center;
      font-size: 12px;
      line-height: 16px;
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

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

export default ListItem;
