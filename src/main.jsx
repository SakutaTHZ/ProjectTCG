import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GameScreen from "./pages/GameScreen.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/ProjectTCG" element={<App />} />
        <Route path="/ProjectTCG/GameScreen" element={<GameScreen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
