import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Comonents
import Nav from "./components/Nav";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

//css
import './css/nav.css';
import './css/home.css';

function App() {
  return (
    <div>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
