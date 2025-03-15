import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative">

      <Header />

      <main>{children}</main>

      <Navbar />
    </div>
  );
};

export default Layout;
