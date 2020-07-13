import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Node from "./Node/Node";

import "./Pathfinding.css";

export default class Pathfinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
    };
  }

  componentDidMount() {
    const grid = InitGrid();
    this.setState({ grid });
  }

  render() {
    const { grid } = this.state;

    return (
      <div>
        <ButtonGroup className="pathfinding-button-group">
          <Link to="/">
            <Button variant="primary">Home</Button>
          </Link>
          <Button variant="secondary">Djikstra's</Button>
          <Button variant="secondary">A* Search</Button>
          <Button variant="secondary">Depth-First Search</Button>
          <Button variant="secondary">Breadth-First Search</Button>
          <Button variant="primary">Reset</Button>
        </ButtonGroup>

        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      row={row}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const InitGrid = () => {
  const grid = [];

  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(row, col));
    }
    grid.push(currentRow);
  }

  return grid;
};

const createNode = (row, col) => {
  return {
    col,
    row,
    isStart: false,
    isFinish: false,
    isWall: false,
  };
};
