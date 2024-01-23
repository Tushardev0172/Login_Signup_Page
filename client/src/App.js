import React from "react";
import Login from "./login";
import Signup from "./signup";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Signup/>}/>
            <Route exact path="/login" element={<Login/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
