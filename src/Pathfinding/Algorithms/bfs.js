export function bfs(grid, start, end) {
  const visited_nodes = [];
  const queue = [];

  queue.push(start);
  visited_nodes.push(start);

  while (queue) {
    // get the next node from queue
    const current_node = queue.pop(0);

    for (const neighbor in getUnvisitedNeighbors(current_node)) {
      if (!neighbor in visited_nodes) {
        visited_nodes.push(neighbor);
        queue.append(neighbor);
      }
    }
  }

  return visited_nodes;
}

const getUnvisitedNeighbors = (node, grid) => {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
};
