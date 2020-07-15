import { swap } from "./swap";

export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSort(array, animations);
  return animations;
}

function bubbleSort(array, animations) {
  var swapped = false;

  for (let i = 0; i < array.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      // push indices to highlight and show what elements
      // are being compared
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);

      if (array[j] > array[j + 1]) {
        // push indices and their swapped elements to apply
        // to array on screen
        animations.push([j, array[j + 1]]);
        animations.push([j + 1, array[j]]);

        // swap the elements in array
        swap(array, j, j + 1);

        // make sure the loop runs again, because
        // the algorithm is not done sorting
        swapped = true;
      } else {
        // if the two elements are in order,
        // don't do anything
        animations.push([j, array[j]]);
        animations.push([j + 1, array[j + 1]]);
      }
    }

    // if no two elements are swapped, break and return
    if (!swapped) {
      break;
    }
  }
}
