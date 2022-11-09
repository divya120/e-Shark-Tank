import React from "react";
import { Route, Routes } from "react-router-dom";
import IdeaDetail from "../Components/IdeaDetail";
import Landing from "../Components/Landing";
import Login from "../Components/Login";
import Register from "../Components/Register";

const RoutesList = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<IdeaDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default RoutesList;
