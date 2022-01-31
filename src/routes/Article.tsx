import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";

function Article() {
  return (
    <Viewport>
      <Header />
      <Nav />
      Article
    </Viewport>
  );
}

export default Article;
