import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import List from "../components/List";
import { useEffect, useState } from "react";
import { fetchNums, fetchArticles } from "../api";
import { useSelector } from "react-redux";

function Article() {
  const sortMode = useSelector((state) => state.sort.sortMode);
  const [loading, setLoading] = useState(true);
  const [articleDatas, setArticleDatas] = useState([]);
  const [articleNums, setArticleNums] = useState([]);

  useEffect(() => {
    (async () => {
      const json = await fetchNums();
      setArticleNums(json);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const sortNums = [...articleNums];
      if (sortMode === "new") {
        sortNums.sort((a, b) => b - a);
      }
      const objArr = await fetchArticles(sortNums, 0, 10);
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
