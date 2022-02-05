import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";

type AData = {
  descendants: number;
  id: number;
  score: number;
  time: number;
  text?: string;
  by: string;
  title: string;
  url?: string;
};

function Desc() {
  const { id }: any = useParams();
  const [data, setData] = useState<any>();

  useEffect(() => {
    (async () => {
      const objArr: any = await fetchArticles([id], 0, 1);
      setData(objArr[0]);
      console.log(data);
    })();
  }, []);

  const newTime = (time: number) => {
    let newTime = Math.floor((Date.now() / 1000 - time) / 60);
    if (newTime < 60) return `${newTime} minutes`;
    else if (newTime < 60 * 24) {
      newTime = Math.floor(newTime / 60);
      return `${newTime} hours`;
    } else {
      newTime = Math.floor(newTime / 60 / 24);
      return `${newTime} days`;
    }
  };

  return (
    <Viewport>
      <DescHeader>
        <h2>{newTime(data?.time)} ago</h2>
        <h1>{data?.title}</h1>
        <div>
          <div>
            <span>{data?.score} points</span>
            <svg
              width="2"
              height="2"
              viewBox="0 0 2 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1" cy="1" r="1" fill="#E5E5EC" />
            </svg>

            <span>{data?.by}</span>
          </div>
          <a
            href={`https://news.ycombinator.com/item?id=${data?.id}`}
            target="_blank"
          >
            news.ycombinator.com
          </a>
        </div>
      </DescHeader>
    </Viewport>
  );
}

const DescHeader = styled.div`
  margin: 24px 20px 0;
  h2 {
    color: ${(props) => props.theme.accentColor};
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 4px;
    opacity: 0.5;
  }
  h1 {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 16px;
  }
  div {
    color: ${(props) => props.theme.listTop.text};
    font-size: 12px;
    line-height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      color: ${(props) => props.theme.listItem.textAuthor};
      display: flex;
      span {
        margin-right: 4px;
      }
      svg {
        margin-right: 4px;
      }
    }
  }
`;

export default Desc;
