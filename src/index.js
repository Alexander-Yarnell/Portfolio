import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Comonents
import Nav from "./components/Nav";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <main>
        <Nav mobile={false}/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
