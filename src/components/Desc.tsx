import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import { useEffect, useState } from "react";

type AData = {
  descendants: number;
  id: number;
  score: number;
  time: number;
  text?: string;
  by: string;
  title: string;
  url?: string;
};

function Desc({ title, id, score, text, by, url }: AData) {
  return (
    <Viewport>
      <p>test</p>
    </Viewport>
  );
}

export default Desc;
