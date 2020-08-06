export function dfs(grid, start, end) {
  const visited_nodes = [];
  const stack = [];

  stack.push(start);

  while (stack.length !== 0) {
    // get the next node from queue
    const current_node = stack.pop();

    if (current_node.isWall) continue;

    current_node.isVisited = true;
    visited_nodes.push(current_node);

    if (current_node === end) return visited_nodes;

    for (const neighbor of getNeighbors(current_node, grid)) {
      if (!neighbor.isVisited) {
        neighbor.prevNode = current_node;
        stack.push(neighbor);
      }
    }
  }

  return visited_nodes;
}

const getNeighbors = (node, grid) => {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors;
};
