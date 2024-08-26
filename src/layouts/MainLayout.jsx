/* eslint-disable no-unused-vars */
import NavBar from "../components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default MainLayout;
