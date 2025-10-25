import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ToTop from "../Featured/Common/ToTop";
import Loading from "../Featured/Common/Loading";
const Layout = () => {

  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <ToTop />
        <Loading />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
