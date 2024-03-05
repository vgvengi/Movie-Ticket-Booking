import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import React from "react";
import Login from "./Components/Login";
import SignIn from "./Components/SignIn";
import Home2 from "./Components/Home2";
import Register from "./Components/Register";
import MyTicket from "./Components/MyTicket";
import Home3 from "./Components/Home3";
import Seat from "./Components/Seat";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Home2" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/~"element={<Home2/>}/>
          <Route path="/Register"element={<Register/>} />
          <Route path="/Home3"element={<Home3/>} />
          <Route path="/MyTicket" element={<MyTicket/>} />
          <Route path="/SelectSeat"element={<Seat/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
