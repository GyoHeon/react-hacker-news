import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import TotalRank from "../components/TotalRank";
import { useEffect, useState } from "react";
import { fetchNums, fetchArticles } from "../api";
import { useTheme } from "../context/ThemeProvider";

function Home() {
  const [articleNums, setArticleNums] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [articleDatas, setArticleDatas] = useState<object[]>([]);
  const [ThemeMode, toggleTheme] = useTheme();

  useEffect(() => {
    (async () => {
      const json: any = await fetchNums();

      const objArr: any = await fetchArticles(json, 0, 5);

      setArticleDatas(objArr);

      console.log(objArr);
      console.log("nums:", articleNums);
      console.log("data:", articleDatas);
      setLoading(false);
    })();
  }, []);

  return (
    <Viewport>
      <Header toggle={toggleTheme} mode={ThemeMode} />
      <Nav isHome={true} />
      <TotalRank datas={articleDatas} />
    </Viewport>
  );
}

export default Home;
