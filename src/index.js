//Modules
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

//Css
import "./css/Home.css";
import "./css/index.css";

//Pages
import Home from './pages/Home';
import About from './pages/About';

//Components
import Nav from "./components/Nav";

//Single page application
function Spa() {
  return (
    <HashRouter>
      <div className="App">
        <Nav />
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
        </div>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>,
  document.getElementById("root")
);
