import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchAsk } from "../api";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import List from "../components/List";

function Ask() {
  const { data: articleNums } = useQuery<number[], unknown>(
    "askList",
    fetchAsk
  );
  articleNums?.slice(0, 10).map((articleNum) => articleNum);

  console.log(articleNums);
  return (
    <Viewport>
      <Header />
      <Nav />
      <List></List>
    </Viewport>
  );
}

export default Ask;
