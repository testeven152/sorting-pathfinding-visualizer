import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="column">
          <Link to="/Sorting">
            <Button variant="outline-dark" size="lg">
              Sorting
            </Button>
          </Link>
        </div>
        <div className="column">
          <Link to="/Pathfinding">
            <Button variant="outline-dark" size="lg">
              Pathfinding
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
