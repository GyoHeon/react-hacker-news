import Header from "./Header";
import Nav from "./Nav";
import Viewport from "./Viewport";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Viewport>
      <Header />
      <Outlet />
    </Viewport>
  );
};

export default Layout;
