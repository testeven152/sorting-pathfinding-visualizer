import { swap } from "./swap";

export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSort(array, animations);
  return animations;
}

function selectionSort(array, animations) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;
    animations.push([minIdx, -1]);
    for (let j = i + 1; j < array.length; j++) {
      animations.push([j, j]);
      animations.push([j, j]);
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    animations.push([minIdx, -1]);

    animations.push([minIdx, array[minIdx]]);
    animations.push([i, array[i]]);
    swap(array, minIdx, i);
  }
}
