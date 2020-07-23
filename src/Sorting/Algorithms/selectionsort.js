import { swap } from "./swap";

export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxillaryarray = array.slice();
  selectionSort(auxillaryarray, animations);
  return animations;
}

function selectionSort(array, animations) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;
    animations.push([i, -1]);
    for (let j = i + 1; j < array.length; j++) {
      animations.push([j, -2]);
      animations.push([j, -3]);
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }

    animations.push([minIdx, array[i]]);
    animations.push([i, array[minIdx]]);
    swap(array, minIdx, i);

    animations.push([i, -1]);
  }
}
