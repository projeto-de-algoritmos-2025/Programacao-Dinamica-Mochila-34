import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AppBar from "./components/AppBar";
import Help from "./pages/Help";



function App() {
  return (
    <>
      <Router>
        <AppBar/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/products" Component={Products} />
          <Route path="/help" Component={Help}/>
        </Routes >
      </Router>
    </>
  );
}

export default App;
