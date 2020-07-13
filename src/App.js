import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./Home/Home";
import Pathfinding from "./Pathfinding/Pathfinding";
import Sorting from "./Sorting/Sorting";

function App() {
  return (
    <div className="App">
      <h1>Sorting & Pathfinding Visualizer</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Sorting" component={Sorting} />
          <Route path="/Pathfinding" component={Pathfinding} />
        </Switch>
      </BrowserRouter>

      <div className="Footer">
        <p>
          Created by Steven Te. View the source code{" "}
          <a href="https://github.com/testeven152/sorting-pathfinding-visualizer">
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
