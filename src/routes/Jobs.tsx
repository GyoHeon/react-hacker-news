import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import List from "../components/List";
import { useEffect, useState } from "react";
import { fetchNums, fetchArticles } from "../api";
import { useTheme } from "../context/ThemeProvider";

function Jobs() {
  const [loading, setLoading] = useState(true);
  const [articleDatas, setArticleDatas] = useState<object[]>([]);
  const [ThemeMode, toggleTheme] = useTheme();

  useEffect(() => {
    (async () => {
      const json: number[] = await fetchNums("job");

      const objArr: any = await fetchArticles(json, 0, 10);

      setArticleDatas(objArr);
      setLoading(false);
    })();
  }, []);

  return (
    <Viewport>
      <Header />
      <Nav />
      <List datas={articleDatas}></List>
    </Viewport>
  );
}

export default Jobs;
