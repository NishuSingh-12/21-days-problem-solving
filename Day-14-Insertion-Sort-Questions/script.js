//************************* 8. Use Insertion Sort to Sort Only The Even Index Positions ***************************//

function sortOnlyAtEvenIndex(arr) {
  for (let i = 2; i < arr.length; i += 2) {
    let curr = arr[i];
    let j = i - 2;

    while (j >= 0 && arr[j] > curr) {
      arr[j + 2] = arr[j];
      j -= 2;
    }

    arr[j + 2] = curr;
  }

  return arr;
}
console.log(sortOnlyAtEvenIndex([9, 1, 8, 2, 7, 3]));
