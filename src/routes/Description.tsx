import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import List from "../components/List";
import { Route, Routes, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchNums, fetchArticles } from "../api";
import { useTheme } from "../context/ThemeProvider";
import { useSort } from "../context/SortProvider";
import InfoModal from "../components/InfoModal";
import Desc from "../components/Desc";

function Description() {
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <Viewport>
      <Header toggle={toggleTheme} mode={ThemeMode} />
      <Nav />
      <Desc />
    </Viewport>
  );
}

export default Description;
