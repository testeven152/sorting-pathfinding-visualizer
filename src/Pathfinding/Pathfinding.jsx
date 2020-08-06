import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import Node from "./Node/Node";
import { getNodesInShortestPathOrder } from "./Algorithms/getNodesInShortestPathOrder";
import { djikstra } from "./Algorithms/djikstra";
import { astar } from "./Algorithms/astar";
import { bfs } from "./Algorithms/bfs";
import { dfs } from "./Algorithms/dfs";

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
    this.clearVisitedNodes();

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

  animateAStar() {
    this.clearVisitedNodes();

    const { grid } = this.state;
    const startnode = grid[START_NODE_ROW][START_NODE_COL];
    const endnode = grid[END_NODE_ROW][END_NODE_COL];
    const visitedNodesInOrder = astar(grid, startnode, endnode);
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

  animateBFS() {
    this.clearVisitedNodes();

    const { grid } = this.state;
    const startnode = grid[START_NODE_ROW][START_NODE_COL];
    const endnode = grid[END_NODE_ROW][END_NODE_COL];
    const visitedNodesInOrder = bfs(grid, startnode, endnode);
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

  animateDFS() {
    this.clearVisitedNodes();

    const { grid } = this.state;
    const startnode = grid[START_NODE_ROW][START_NODE_COL];
    const endnode = grid[END_NODE_ROW][END_NODE_COL];
    const visitedNodesInOrder = dfs(grid, startnode, endnode);
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

  clearVisitedNodes() {
    const newGrid = this.state.grid.slice();
    const visitedNodes = [
      ...document.getElementsByClassName("node visited"),
      ...document.getElementsByClassName("node shortest-path"),
    ];

    if (visitedNodes.length === 0) return;

    for (let i = 0; i < visitedNodes.length; i++) {
      const nodeid = visitedNodes[i].id.split("-");

      const nodeRow = Number(nodeid[1]);
      const nodeCol = Number(nodeid[2]);

      if (nodeRow === START_NODE_ROW && nodeCol === START_NODE_COL) {
        visitedNodes[i].className = "node start";
      } else if (nodeRow === END_NODE_ROW && nodeCol === END_NODE_COL) {
        visitedNodes[i].className = "node finish";
      } else {
        visitedNodes[i].className = "node ";
      }

      visitedNodes[i].prevNode = null;

      newGrid[nodeRow][nodeCol] = createNode(nodeRow, nodeCol);
    }

    this.setState({ grid: newGrid });
  }

  clearWallNodes() {
    const newGrid = this.state.grid.slice();
    const wallNodes = [...document.getElementsByClassName("node wall")];
    if (wallNodes.length === 0) return;

    for (let j = 0; j < wallNodes.length; j++) {
      const nodeid = wallNodes[j].id.split("-");

      const nodeRow = Number(nodeid[1]);
      const nodeCol = Number(nodeid[2]);

      wallNodes[j].className = "node ";

      newGrid[nodeRow][nodeCol] = createNode(nodeRow, nodeCol);
    }

    this.setState({ grid: newGrid });
  }

  resetGrid() {
    this.clearVisitedNodes();
    this.clearWallNodes();
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
