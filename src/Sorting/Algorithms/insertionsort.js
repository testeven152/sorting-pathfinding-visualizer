export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxillaryarray = array.slice();
  insertionSort(auxillaryarray, animations);
  return animations;
}

function insertionSort(array, animations) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    animations.push([i, -1]);
    while (j >= 0 && array[j] > key) {
      animations.push([j, -2]);
      animations.push([j, -3]);
      animations.push([j + 1, array[j]]);
      array[j + 1] = array[j];
      j--;
    }

    animations.push([i, -1]);
    animations.push([j + 1, key]);
    array[j + 1] = key;
  }
}
