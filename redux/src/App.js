// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import Admin from "./Admin";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navbar />}>
            <Route path="login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="Admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
