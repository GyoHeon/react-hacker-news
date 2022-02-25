import { useEffect, useState } from "react";
import { fetchNums, fetchArticles } from "../api";

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

function Jobs() {
  const [loading, setLoading] = useState<boolean>(true);
  const [articleDatas, setArticleDatas] = useState<ADatas[]>([]);

  useEffect(() => {
    (async () => {
      const json: number[] = await fetchNums("job");

      const objArr: any = await fetchArticles(json, 0, 10);

      setArticleDatas(objArr);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Nav />
      <List datas={articleDatas} />
    </>
  );
}

export default Jobs;
