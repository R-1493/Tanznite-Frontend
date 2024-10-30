// Layout.jsx
import React from "react";
import Navbar from "../navbar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-[#FDFEFE] font-serif font-cormorant-infant">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;