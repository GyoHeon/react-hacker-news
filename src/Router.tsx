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
          <Route path="/Show" element={<Show />} />
          <Route path="/Ask" element={<Ask />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/:menu/:id" element={<Description />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  );
}

export default Router;
