// *************************** 13. Find the Maximum Element in an Array Using Recursion **********************//

function findMax(arr, index = 1, max = arr[0]) {
  if (arr.length === 0) return undefined;
  if (index === arr.length) return max;
  if (arr[index] > max) max = arr[index];
  return findMax(arr, index + 1, max);
}
console.log(findMax([7, 3, 9, 2, 10]));
