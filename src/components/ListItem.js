import styled from "styled-components";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";

type AData = {
  descendants: number,
  id: number,
  score: number,
  time: number,
  index: number,
  text: string,
  by: string,
  title: string,
  url?: string,
};

function ListItem({
  id,
  by,
  score,
  time,
  title,
  descendants,
  index,
  url,
}: AData) {
  const [timeD, setTimeD] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isControlled, setIsControlled] = useState(true);

  useEffect(() => {
    let newTime = Math.floor((Date.now() / 1000 - time) / 60);
    if (newTime < 60) setTimeD(`${newTime} minutes`);
    else if (newTime < 60 * 24) {
      newTime = Math.floor(newTime / 60);
      setTimeD(`${newTime} hours`);
    } else {
      newTime = Math.floor(newTime / 60 / 24);
      setTimeD(`${newTime} days`);
    }
  }, []);

  const newIndex = ("00" + (index + 1).toString()).slice(-3);
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };
  const handleStart = () => {
    setIsControlled(false);
  };
  const handleStop = () => {
    const URL = url ? url : `https://news.ycombinator.com/item?id=${id}`;
    if (position.x === -100) {
      window.open(URL, "_blank").focus();
    }
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Li>
      <Draggable
        position={position}
        bounds={{ left: -100, right: 100, top: 0, bottom: 0 }}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <Box isControlled={isControlled}>
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
        </Box>
      </Draggable>
      <section className="under">
        <div className="rank">
          <h2>{newIndex}</h2>
          <span>{timeD} ago</span>
        </div>
        <div className="link">
          <img src={`./image/link.png`} alt="link" />
        </div>
      </section>
    </Li>
  );
}

const Box = styled.div`
  background-color: ${(props) => props.theme.listItem.backgroundColor};
  box-shadow: ${(props) => props.theme.listItem.shadow};
  transition: ${(props) => (props.isControlled ? `transform 10s` : `none`)};
  width: 335px;
  border-radius: 16px;
  padding: 16px 16px 12px;
  position: relative;
  z-index: 5;
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

const Li = styled.li`
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.accentColor} 50%,
    ${(props) => props.theme.subAccentColor} 50%
  );
  width: 335px;
  border-radius: 16px;
  margin: 0 20px 12px;
  position: relative;
  .under {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .rank {
      color: #ffffff;
      left: 24px;
      top: 50%;
      transform: translate(0, -50%);
      position: absolute;
      width: 60px;
      h2 {
        font-size: 20px;
        line-height: 22px;
        margin-bottom: 4px;
      }
      span {
        font-size: 12px;
        line-height: 12px;
      }
    }
    .link {
      right: 16px;
      top: 50%;
      position: absolute;
      transform: translate(0, -50%);
      img {
        width: 48px;
        height: 48px;
      }
    }
  }
`;

export default ListItem;
