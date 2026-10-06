//************************* 9. Find the Index Where an Element Should Be Inserted(Lower Bound) ***************************//

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let answer = arr.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    }
    if (arr[mid] >= target) {
      answer = mid;
      right = mid - 1;
    }
  }
  return `Insert at index ${answer}`;
}

console.log(lowerBound([1, 3, 5, 7], 4));
