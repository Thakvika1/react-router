import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function index() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default index;
