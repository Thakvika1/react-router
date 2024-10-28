import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function index() {
  return (
    <>
      <NavBar />
      <Outlet />
      <SideBar />
    </>
  );
}

export default index;
