// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Details from "./pages/Details/Details";
import LogIn from "./pages/LogIn";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/product/:id" exact element={<Details />} />
      </Routes>
    </div>
  );


}

export default App;