export function astar(grid, start, end) {
  const unvisited_nodes = getAllNodes(grid);
  const visited_nodes = [];

  start.distance = 0;

  while (unvisited_nodes.length !== 0) {
    sortNodesByDistance(unvisited_nodes);
    const closestNode = unvisited_nodes.shift();

    if (closestNode.isWall) continue;

    // generate closestNode's 8 successors and set their parents to q
    updateUnvisitedNodes(closestNode, grid);
    const successors = getUnvisitedNeighbors(closestNode, grid);

    // for each successor...
    for (const successor of successors) {
      // if successor is end, stop search
      // --------------------------
      // if a node with the same position as successor is in
      // unvisited_nodes which has lower f than successor, skip
      // --------------------------
      // if a node with the same position as sucessor is in
      // visited_nodes which has a lower f than successor, skip
      // otherwise add the node to open list
    }

    // push closestNode to visited_nodes
    closestNode.isVisited = true;
    visited_nodes.push(closestNode);
  }

  return visited_nodes;
}

const updateUnvisitedNodes = (node, grid) => {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.prevNode = node;
  }
};

const getUnvisitedNeighbors = (node, grid) => {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
};

const getAllNodes = (grid) => {
  const nodes = [];

  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }

  return nodes;
};

const sortNodesByDistance = (nodes) => {
  nodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
};
