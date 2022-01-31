import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchAsk } from "../api";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import List from "../components/List";
import { useEffect, useState } from "react";

const BASE_URL = `https://hacker-news.firebaseio.com/v0`;

function Ask() {
  const [articleNums, setArticleNums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [titles, setTitles] = useState([]);
  const [articleDatas, setArticleDatas] = useState([]);

  useEffect(async () => {
    const json = await fetch(`${BASE_URL}/askstories.json`).then((response) =>
      response.json()
    );

    setArticleNums(json);

    const objArr = await Promise.all(
      json.map((articleNum) => {
        const value = fetch(`${BASE_URL}/item/${articleNum}.json`).then(
          (response) => response.json()
        );

        return value;
      })
    );

    setArticleDatas(objArr);

    console.log(objArr);
    console.log("nums:", articleNums);
    console.log("data:", articleDatas);
    setLoading(false);
  }, []);

  return (
    <Viewport>
      <Header />
      <Nav />
      <List datas={articleDatas}>
        {/* {loading
          ? "wait"
          : articleDatas?.map((x) => <li key={x.id}>{x.title}</li>)} */}
      </List>
    </Viewport>
  );
}

export default Ask;
