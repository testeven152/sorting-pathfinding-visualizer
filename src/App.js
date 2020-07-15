import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./Home/Home";
import Pathfinding from "./Pathfinding/Pathfinding";
import Sorting from "./Sorting/Sorting";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />

      <div className="Header">
        <h1>Sorting & Pathfinding Visualizer</h1>
      </div>

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
