import React from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import "./App.css";
import Continent from "./components/Continent";
import Country from "./components/Country";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countinent" element={<Continent />} />
        <Route path="/country" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
