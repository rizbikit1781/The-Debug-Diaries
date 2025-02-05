import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32">
      <Navbar />
      {/* Outlet will represent the Page Content*/}
      <Outlet /> 
    </div>
  );
};

export default MainLayout;
