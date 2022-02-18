import { useEffect, useState } from "react";
import { fetchNums, fetchArticles } from "../api";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import List from "../components/List";

interface ADatas {
  descendants: number;
  id: number;
  score: number;
  time: number;
  text: string;
  by: string;
  title: string;
  url?: string;
}

function Article() {
  const sortMode = useSelector((state: RootState) => state.sort.sortMode);
  const [loading, setLoading] = useState<boolean>(true);
  const [articleNums, setArticleNums] = useState<number[]>([]);
  const [articleDatas, setArticleDatas] = useState<ADatas[]>([]);

  useEffect(() => {
    (async () => {
      const json: number[] = await fetchNums();
      setArticleNums(json);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const sortNums: number[] = [...articleNums];
      if (sortMode === "new") {
        sortNums.sort((a: number, b: number) => b - a);
      }
      const objArr: any = await fetchArticles(sortNums, 0, 10);
      setArticleDatas(objArr);
    })();
  }, [loading, sortMode]);

  return (
    <Viewport>
      <Header />
      <Nav />
      <List datas={articleDatas}></List>
    </Viewport>
  );
}

export default Article;
