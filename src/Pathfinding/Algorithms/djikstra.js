export function djikstra(grid, start, end) {
  const unvisited_nodes = getAllNodes(grid);
  const visited_nodes = [];

  start.distance = 0;

  while (unvisited_nodes.length !== 0) {
    sortNodesByDistance(unvisited_nodes);
    const closestNode = unvisited_nodes.shift();

    if (closestNode.isWall) continue;

    if (closestNode.distance == Infinity) return visited_nodes;
    closestNode.isVisited = true;
    visited_nodes.push(closestNode);

    if (closestNode == end) return visited_nodes;
    updateUnvisitedNodes(unvisited_nodes);
  }
}

const updateUnvisitedNodes = (nodes) => {};

const sortNodesByDistance = (nodes) => {};

const getAllNodes = (grid) => {
  const nodes = [];

  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }

  return nodes;
};
