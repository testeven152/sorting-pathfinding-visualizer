import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import Node from "./Node/Node";
import { djikstra } from "./Algorithms/djikstra";

import "./Pathfinding.css";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const END_NODE_ROW = 10;
const END_NODE_COL = 35;

export default class Pathfinding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      mouseIsPressed: false,
    };
  }

  componentDidMount() {
    const grid = InitGrid();
    this.setState({ grid });
  }

  handleMouseDown(row, col) {
    const newGrid = toggleIsWall(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
    console.log("handleMouseDown");
  }

  handleMouseEnter(row, col) {
    const newGrid = toggleIsWall(this.state.grid, row, col);
    this.setState({ grid: newGrid });
    console.log("handleMouseEnter");
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
    console.log("handleMouseUp");
  }

  animateDjikstra() {
    const { grid } = this.state;
    const startnode = grid[START_NODE_ROW][START_NODE_COL];
    const endnode = grid[END_NODE_ROW][END_NODE_COL];
    const visitedNodesInOrder = djikstra(grid, startnode, endnode);
  }

  resetGrid() {
    const newGrid = InitGrid();
    this.setState({ grid: newGrid });
  }

  render() {
    const { grid, mouseIsPressed } = this.state;

    return (
      <div>
        <ButtonGroup className="pathfinding-button-group">
          <Link to="/">
            <Button variant="primary">Home</Button>
          </Link>
          <Button variant="secondary" onClick={() => this.animateDjikstra()}>
            Djikstra's
          </Button>
          <Button variant="secondary">A* Search</Button>
          <Button variant="secondary">Depth-First Search</Button>
          <Button variant="secondary">Breadth-First Search</Button>
          <Button variant="primary" onClick={() => this.resetGrid()}>
            Reset
          </Button>
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
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
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

const toggleIsWall = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
