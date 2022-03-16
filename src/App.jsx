import "./App.css";
import ResponsiveAppBar from "./Components/AppBar";
import Box from "@mui/material/Box";
import { Button, Card, Grid, Rating, Typography } from "@mui/material";
import sharkTankBG from "./images/sharkTankBG.jpg";
import start from "./images/start.jpg";
import { useState } from "react";
import IdeaDetail from "./Components/IdeaDetail";
import Landing from "./Components/Landing";
import CreatorProfile from "./Components/CreatorProfile";
import Chat from "./Components/Chat/Chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesList from "./Routes";

// Width of the card component
// Caraousel
// Styling of components - inline
const App = () => {
  const [starValue, setStarValue] = useState(3);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#15202B",
        color: "white",
        //  position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <ResponsiveAppBar />
      <RoutesList />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<IdeaDetail />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
