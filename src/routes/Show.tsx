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

function Show() {
  const sortMode = useSelector((state: RootState) => state.sort.sortMode);
  const [loading, setLoading] = useState<boolean>(true);
  const [articleDatas, setArticleDatas] = useState<ADatas[]>([]);
  const [articleNums, setArticleNums] = useState<number[]>([]);

  useEffect(() => {
    (async () => {
      const json: number[] = await fetchNums("show");
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
      const objArr: any = (await fetchArticles(sortNums, 0, 10)).map((data) => {
        if (data.title.slice(0, 7) === "Show HN") {
          data.title = data.title.slice(9);
        }
        return data;
      });
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

export default Show;
