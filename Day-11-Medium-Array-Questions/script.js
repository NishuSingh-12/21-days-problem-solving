//************************* 8. Find the Longest Increasing Subarray (continuous) ***************************//

function longestIncreasingSubarray(arr) {
  let currentStart = 0;
  let maxStart = 0;
  let maxLen = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      let currentLen = i - currentStart + 1;

      if (currentLen > maxLen) {
        maxLen = currentLen;
        maxStart = currentStart;
      }
    } else {
      currentStart = i;
    }
  }

  return arr.slice(maxStart, maxStart + maxLen);
}

console.log(longestIncreasingSubarray([1, 2, 3, 2, 4, 5, 6, 1]));
