import React from "react";
import { Route, Routes } from "react-router-dom";
import IdeaDetail from "../Components/IdeaDetail";
import Landing from "../Components/Landing";

const RoutesList = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<IdeaDetail />} />
      </Routes>
    </div>
  );
};

export default RoutesList;
