import { useEffect, useState } from "react";
import { fetchArticle } from "../api";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import Desc from "../components/Desc";
import Comment from "../components/Comment";

function Description() {
  const { id }: any = useParams();
  const [data, setData] = useState<object>();

  useEffect(() => {
    (async () => {
      const obj: object = await fetchArticle(id);
      setData(obj);
    })();
  }, []);

  return (
    <Viewport>
      <Header />
      <Nav />
      <Desc props={data} />
      <Comment props={data} />
    </Viewport>
  );
}

export default Description;
