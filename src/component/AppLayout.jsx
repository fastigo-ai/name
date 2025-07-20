import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import RightSidebarButtons from "../Pages/RightSiderbarButton";
import ScrollToTop from "./ScrollToTop";


const AppLayout = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <RightSidebarButtons />
      <div className="pt-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
