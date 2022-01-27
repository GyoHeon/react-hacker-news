import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
