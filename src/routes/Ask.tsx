import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import List from "../components/List";
import { useEffect, useState } from "react";
import { fetchNums, fetchArticles } from "../api";
import { useTheme } from "../context/ThemeProvider";
import { useSort } from "../context/SortProvider";
import InfoModal from "../components/InfoModal";
import Desc from "../components/Desc";

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

function Ask() {
  const [loading, setLoading] = useState(true);
  const [articleNums, setArticleNums] = useState<number[]>([]);
  const [articleDatas, setArticleDatas] = useState<ADatas[]>([]);
  const [ThemeMode, toggleTheme] = useTheme();
  const [SortMode, newSort, topSort] = useSort();

  useEffect(() => {
    (async () => {
      const json: number[] = await fetchNums("ask");
      setArticleNums(json);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const sortNums: number[] = [...articleNums];
      if (SortMode === "new") {
        sortNums.sort((a: number, b: number) => b - a);
      }
      const objArr: any = (await fetchArticles(sortNums, 0, 10)).map((data) => {
        if (data.title.slice(0, 6) === "Ask HN") {
          data.title = data.title.slice(8);
        }
        return data;
      });
      setArticleDatas(objArr);
    })();
  }, [loading, SortMode]);

  return (
    <Viewport>
      <Header toggle={toggleTheme} mode={ThemeMode} />
      <Nav />
      <List datas={articleDatas} />
    </Viewport>
  );
}

export default Ask;
