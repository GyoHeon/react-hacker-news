import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchAsk } from "../api";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import List from "../components/List";
import { useEffect, useState } from "react";

interface IArticle {
  title: string;
}

function Ask() {
  const { isLoading, data: articleNums } = useQuery<any[]>("askList", fetchAsk);
  const [articles, setArticles] = useState<string[]>([]);
  let articleArr: any[] = [];

  if (!isLoading) {
    articleNums?.map((x) => x.then((title: string) => articleArr.push(title)));
  } else {
    console.log("wait");
  }
  useEffect(() => {
    articleArr = [
      articleNums?.map((x) =>
        x.then((title: string) => articleArr.push(title))
      ),
    ].slice(1);
    console.log(articleArr);
  }, [isLoading]);

  // if (!isLoading) {
  //   articleArr.map((x) => console.log(x));
  //   console.log(articleArr);
  // } else {
  //   console.log("fail");
  // }

  // promise.then((appData) => {
  //   console.log(appData);
  // });

  //articleArr.map((article) => console.log(article))
  return (
    <Viewport>
      <Header />
      <Nav />
      <List>
        {isLoading
          ? "wait..."
          : articleArr?.map((x) =>
              x.then((title: string) => console.log(title))
            )}
      </List>
    </Viewport>
  );
}

export default Ask;
