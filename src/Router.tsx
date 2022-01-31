import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import MobileFrame from "./components/MobileFrame";
import Ask from "./routes/Ask";
import Jobs from "./routes/Jobs";
import Article from "./routes/Article";
import Show from "./routes/Show";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MobileFrame>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/Show" element={<Show />} />
          <Route path="/Ask" element={<Ask />} />
          <Route path="/Jobs" element={<Jobs />} />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  );
}

export default Router;
