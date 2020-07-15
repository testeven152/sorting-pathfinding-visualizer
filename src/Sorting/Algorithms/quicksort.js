export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSort(array);
  return animations;
}

function quickSort(array) {}
