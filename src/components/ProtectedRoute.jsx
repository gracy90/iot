import React, { useContext } from "react";
import { AppContext } from "../context/store";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { state } = useContext(AppContext);

  return state?.user?.email ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
}
