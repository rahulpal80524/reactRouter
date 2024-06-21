import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* to display routes inside components, check   main.jsx file route */}
      <Footer />
    </>
  );
}

export default Layout;
