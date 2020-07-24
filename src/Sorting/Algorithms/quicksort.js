import { swap } from "./swap";

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSort(array, 0, array.length - 1, animations);
  return animations;
}

function quickSort(array, startIdx, endIdx, animations) {
  if (startIdx < endIdx) {
    let partitionIdx = partition(array, startIdx, endIdx, animations);

    quickSort(array, startIdx, partitionIdx - 1, animations);
    quickSort(array, partitionIdx + 1, endIdx, animations);
  }
}

function partition(array, startIdx, endIdx, animations) {
  let pivot = array[endIdx];
  let i = startIdx - 1;

  animations.push([endIdx, -1]);

  for (let j = startIdx; j <= endIdx - 1; j++) {
    animations.push([j, -2]);
    animations.push([j, -3]);
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }

  animations.push([endIdx, -1]);

  animations.push([i + 1, array[endIdx]]);
  animations.push([endIdx, array[i + 1]]);
  swap(array, i + 1, endIdx);
  return i + 1;
}
