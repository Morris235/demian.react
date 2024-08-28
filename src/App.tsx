import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage message={"hello world"} />} />
      </Routes>
    </div>
  );
}

export default App;
