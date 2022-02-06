import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Home from "./routes/Home";
import MobileFrame from "./components/MobileFrame";
import Ask from "./routes/Ask";
import Jobs from "./routes/Jobs";
import Article from "./routes/Article";
import Show from "./routes/Show";
import Desc from "./components/Desc";
import Description from "./routes/Description";

interface RouteObject {
  element?: React.ReactNode;
  path?: string;
}

function Router<RouteObject>() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MobileFrame>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/Article/:id" element={<Description />} />
          <Route path="/Show" element={<Show />} />
          <Route path="/Show/:id" element={<Description />} />
          <Route path="/Ask/*" element={<Ask />} />
          <Route path="/Ask/:id" element={<Description />} />
          <Route path="/Jobs/*" element={<Jobs />} />
          <Route path="/Jobs/:id" element={<Description />} />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  );
}

export default Router;
