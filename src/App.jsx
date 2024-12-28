import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GameButton from "./components/GameButton" 
import { useNavigate } from "react-router";

function App() {
  
  let navigate = useNavigate();

  const goToGame =()=>{
    
    navigate("/ProjectT/GameScreen");
  }

  return (
    <>
      <p className="fixed text-7xl top-10 ">Project-T</p>
      <GameButton onClick={()=>goToGame()} customClass={`fixed bottom-10 text-2xl`}>Play</GameButton>
    </>
  );
}

export default App;
