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
          <Route path="/News" element={<News />} />
          <Route path="/Show" element={<Show />} />
          <Route path="/Ask" element={<Ask />} />
          <Route path="/Jobs" element={<Jobs />} />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  );
}

export default Router;
