import React from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user/:username" element={<Details />} />
    </Routes>
  );
};

export default App;
