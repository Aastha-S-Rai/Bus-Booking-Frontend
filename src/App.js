import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./pages/landing/landing";
import SignUp from "./pages/signup/signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
