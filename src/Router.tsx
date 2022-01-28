import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import MobileFrame from "./components/MobileFrame";

function Router() {
  return (
    <BrowserRouter>
      <MobileFrame>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  );
}

export default Router;
