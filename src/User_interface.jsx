import Sidebar from "./components/Sidebar";
import Home_header from "./components/Home_header";
import { Outlet } from "react-router-dom";
const User_interface = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <Home_header />
      <Outlet></Outlet>
    </>
  );
};
export default User_interface;
