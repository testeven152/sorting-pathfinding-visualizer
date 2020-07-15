export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxillaryarray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxillaryarray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxillaryarray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxillaryarray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxillaryarray, middleIdx + 1, endIdx, mainArray, animations);
  merge(mainArray, startIdx, middleIdx, endIdx, auxillaryarray, animations);
}

function merge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxillaryarray,
  animations
) {
  let k = startIdx,
    i = startIdx,
    j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);

    if (auxillaryarray[i] <= auxillaryarray[j]) {
      animations.push([k, auxillaryarray[i]]);
      mainArray[k++] = auxillaryarray[i++];
    } else {
      animations.push([k, auxillaryarray[j]]);
      mainArray[k++] = auxillaryarray[j++];
    }
  }

  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxillaryarray[i]]);
    mainArray[k++] = auxillaryarray[i++];
  }

  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxillaryarray[j]]);
    mainArray[k++] = auxillaryarray[j++];
  }
}
