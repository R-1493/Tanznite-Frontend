// Layout.jsx
import React from "react";
import Navbar from "../navbar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(props) {
  const { userData, isAuthenticated } = props;

  return (
    <div className="bg-[#FDFEFE] font-serif font-cormorant-infant">
      <Navbar userData={userData} isAuthenticated={isAuthenticated} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
