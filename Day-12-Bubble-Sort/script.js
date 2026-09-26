//************************* 10. Sort an Array in Ascending Order but Stop After K Passes ***************************//

function sortArrayStopAfterK(arr, k) {
  for (let i = 0; i < k; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
console.log(sortArrayStopAfterK([5, 4, 3, 2, 1], 2));
