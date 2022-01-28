import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import MobileFrame from "./components/MobileFrame";
import Ask from "./routes/Ask";
import Jobs from "./routes/Jobs";
import News from "./routes/News";
import Show from "./routes/Show";

function Router() {
  return (
    <BrowserRouter>
      <MobileFrame>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/News" element={<News />} />
        </Routes>
        <Routes>
          <Route path="/Show" element={<Show />} />
        </Routes>
        <Routes>
          <Route path="/Ask" element={<Ask />} />
        </Routes>
        <Routes>
          <Route path="/Jobs" element={<Jobs />} />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  );
}

export default Router;
