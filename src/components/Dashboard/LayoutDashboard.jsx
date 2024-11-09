import React from "react";
import { Outlet } from "react-router-dom";
import SidBar from "./SidBar";

function LayoutDashboard(props) {
  return (
    <div className="flex">
      <SidBar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutDashboard;
