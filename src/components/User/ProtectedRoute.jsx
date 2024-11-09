import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const {
    isUserDataLoading,
    isAuthenticated,
    shouldCheckAdmin,
    element,
    userData,
  } = props;

  if (isUserDataLoading) {
    return <div>Loading...</div>;
  }
  if (shouldCheckAdmin) {
    return isAuthenticated && userData.role === "Admin" ? (
      element
    ) : (
      <Navigate to="/login" />
    );
  }

  return isAuthenticated ? element : <Navigate to="/Login" />;
}

export default ProtectedRoute;
