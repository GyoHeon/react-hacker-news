import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import List from "../components/List";
import { useEffect, useState } from "react";
import { fetchNums, fetchArticles } from "../api";
import { useTheme } from "../context/ThemeProvider";
import { useSort } from "../context/SortProvider";

function Article() {
  const [loading, setLoading] = useState(true);
  const [articleDatas, setArticleDatas] = useState<object[]>([]);
  const [articleNums, setArticleNums] = useState<number[]>([]);
  const [sortedNew, setSortedNew] = useState(false);
  const [ThemeMode, toggleTheme] = useTheme();
  const [SortMode, newSort, topSort] = useSort();

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
      if (SortMode === "new") {
        sortNums.sort((a: number, b: number) => b - a);
      }
      const objArr: any = await fetchArticles(sortNums, 0, 10);
      setArticleDatas(objArr);
    })();
  }, [loading, SortMode]);

  return (
    <Viewport>
      <Header toggle={toggleTheme} mode={ThemeMode} />
      <Nav />
      <List datas={articleDatas} sorted={sortedNew}></List>
    </Viewport>
  );
}

export default Article;
