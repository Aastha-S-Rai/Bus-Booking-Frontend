import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SignUp from "./components/signup/signup.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
