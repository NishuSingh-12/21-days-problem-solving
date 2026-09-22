//************************* 11. Count How Many Times an Element Appears in an Array ***************************//

function countAppearsEl(arr, el) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      count++;
    }
  }
  return count;
}
console.log(countAppearsEl([1, 4, 4, 4, 2, 3, 4], 4));
