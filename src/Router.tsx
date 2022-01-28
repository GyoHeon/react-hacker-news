import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import MobileFrame from "./components/MobileFrame";

function Router() {
  return (
    <BrowserRouter>
      <MobileFrame>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  );
}

export default Router;
