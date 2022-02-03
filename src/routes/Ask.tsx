import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import List from "../components/List";
import { useEffect, useState } from "react";
import { fetchNums, fetchArticles } from "../api";
import { useTheme } from "../context/ThemeProvider";

function Ask() {
  const [loading, setLoading] = useState(true);
  const [articleDatas, setArticleDatas] = useState<object[]>([]);
  const [articleNums, setArticleNums] = useState<number[]>([]);
  const [sortedNew, setSortedNew] = useState(false);
  const [ThemeMode, toggleTheme] = useTheme();

  useEffect(() => {
    (async () => {
      const json: any = await fetchNums("ask");
      setArticleNums(json);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const sortNums: number[] = [...articleNums];
      if (sortedNew) {
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
  }, [loading, sortedNew]);

  return (
    <Viewport>
      <Header toggle={toggleTheme} mode={ThemeMode} />
      <Nav />
      <List datas={articleDatas} />
    </Viewport>
  );
}

export default Ask;
