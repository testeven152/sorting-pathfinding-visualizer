export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSort(array, animations);
  return animations;
}

function bubbleSort(mainArray, animations) {
  var swapped = false;

  for (let i = 0; i < mainArray.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < mainArray.length - i - 1; j++) {
      // push indices to highlight and show what elements
      // are being compared
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);

      if (mainArray[j] > mainArray[j + 1]) {
        // push indices and their swapped elements to apply
        // to array on screen
        animations.push([j, mainArray[j + 1]]);
        animations.push([j + 1, mainArray[j]]);

        // swap the elements in array
        let temp = mainArray[j];
        mainArray[j] = mainArray[j + 1];
        mainArray[j + 1] = temp;

        // make sure the loop runs again, because
        // the algorithm is not done sorting
        swapped = true;
      } else {
        // if the two elements are in order,
        // don't do anything
        animations.push([j, mainArray[j]]);
        animations.push([j + 1, mainArray[j + 1]]);
      }
    }

    // if no two elements are swapped, break and return
    if (!swapped) {
      break;
    }
  }
}
