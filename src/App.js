import React, { useContext } from "react";
import Welcome from "./pages/welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import ViewReport from "./pages/viewReport";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import "./index.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute children={<Welcome />} />} />
          <Route path="/about" element={<ProtectedRoute children={<About />} />} />
          <Route path="/viewReport" element={ <ProtectedRoute children={<ViewReport />} />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
