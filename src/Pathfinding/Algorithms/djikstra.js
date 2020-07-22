export function djikstra(grid, start, end) {
  const unvisited_nodes = getAllNodes(grid);
  const visited_nodes = [];

  start.distance = 0;

  while (unvisited_nodes.length !== 0) {
    sortNodesByDistance(unvisited_nodes);
    const closestNode = unvisited_nodes.shift();

    if (closestNode.isWall) continue;

    if (closestNode.distance === Infinity) return visited_nodes;
    closestNode.isVisited = true;
    visited_nodes.push(closestNode);

    if (closestNode === end) return visited_nodes;
    updateUnvisitedNodes(closestNode, grid);
  }
}

const updateUnvisitedNodes = (node, grid) => {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
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

const sortNodesByDistance = (nodes) => {
  nodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
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
