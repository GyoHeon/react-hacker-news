import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import List from "../components/List";
import { useEffect, useState } from "react";
import { fetchNums, fetchArticles } from "../api";

function Show() {
  const [loading, setLoading] = useState(true);
  const [articleDatas, setArticleDatas] = useState<object[]>([]);
  const [articleNums, setArticleNums] = useState<number[]>([]);
  const [sortedNew, setSortedNew] = useState(false);

  useEffect(() => {
    (async () => {
      const json: any = await fetchNums("show");
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
        if (data.title.slice(0, 7) === "Show HN") {
          data.title = data.title.slice(9);
        }
        return data;
      });
      setArticleDatas(objArr);
    })();
  }, [loading, sortedNew]);

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

export default Show;
