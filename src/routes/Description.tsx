import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import { useEffect, useState } from "react";
import { fetchArticle } from "../api";
import { useTheme } from "../context/ThemeProvider";
import { useParams } from "react-router-dom";
import InfoModal from "../components/InfoModal";
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
