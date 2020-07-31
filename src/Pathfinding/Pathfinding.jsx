import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import Node from "./Node/Node";
import { djikstra, getNodesInShortestPathOrder } from "./Algorithms/djikstra";

import "./Pathfinding.css";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const END_NODE_ROW = 10;
const END_NODE_COL = 35;

const ANIMATION_SPEED = 10;

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
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = toggleIsWall(this.state.grid, row, col);
    this.setState({ grid: newGrid });
    console.log("node-%s-%s", row, col);
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node shortest-path";
      }, ANIMATION_SPEED * i);
    }
  }

  animateDjikstra() {
    const { grid } = this.state;
    const startnode = grid[START_NODE_ROW][START_NODE_COL];
    const endnode = grid[END_NODE_ROW][END_NODE_COL];
    const visitedNodesInOrder = djikstra(grid, startnode, endnode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(endnode);

    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, ANIMATION_SPEED * i);

        return;
      }

      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node visited";
      }, ANIMATION_SPEED * i);
    }
  }

  animateAStar() {}

  animateBFS() {}

  animateDFS() {}

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
          <Button variant="secondary" onClick={() => this.animateAStar()}>
            A* Search
          </Button>
          <Button variant="secondary" onClick={() => this.animateDFS()}>
            Depth-First Search
          </Button>
          <Button variant="secondary" onClick={() => this.animateBFS()}>
            Breadth-First Search
          </Button>
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
                      row={row}
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
    distance: Infinity,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === END_NODE_ROW && col === END_NODE_COL,
    isWall: false,
    isVisited: false,
    prevNode: null,
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
