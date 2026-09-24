//************************* 1. Find Missing Number From Range 1 To N ***************************//

function findMissingNum(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}
console.log(findMissingNum([1, 2, 4, 5]));

//************************* 2. Move All Zeroes to End (Stable,O(n)) ***************************//

function moveAllZeroesToEnd(arr) {
  let position = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[position] = arr[i];
      position++;
    }
  }
  while (position < arr.length) {
    arr[position] = 0;
    position++;
  }
  return arr;
}
console.log(moveAllZeroesToEnd([0, 1, 0, 10, 0, 3, 12]));

//************************* 3. Find the First Repeating Element in an Array ***************************//

function firstRepeating(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (!freq[arr[i]]) {
      freq[arr[i]] = 1;
    } else {
      freq[arr[i]] = freq[arr[i]] + 1;
    }
    if (freq[arr[i]] > 1) {
      return arr[i];
    }
  }
  return null;
}

console.log(firstRepeating([4, 7, 2, 7, 9, 2]));

//************************* 4. Maximum Subarray Sum (Kadane's Algorithem - O(n)) ***************************//

function maxSubarraySum(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//************************* 5. Find the Longest Subarray with Sum = K (Optimized) ***************************//

function longestSubarraywithSum(arr, k) {
  let sum = 0;
  let maxLen = 0;
  let start = -1;
  let end = -1;

  const prefixSum = {};

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxLen = i + 1;
      start = 0;
      end = i;
    }

    if (prefixSum[sum - k] !== undefined) {
      let len = i - prefixSum[sum - k];

      if (len > maxLen) {
        maxLen = len;
        start = prefixSum[sum - k] + 1;
        end = i;
      }
    }

    if (prefixSum[sum] === undefined) {
      prefixSum[sum] = i;
    }
  }

  return start === -1 ? [] : arr.slice(start, end + 1);
}
console.log(longestSubarraywithSum([1, 2, 3, 4, 5], 9));

//************************* 6. Find the Length of the Longest Subarray with No Repeating Elements ***************************//

function longestUniqueSubarray(arr) {
  let left = 0;
  let maxLen = 0;
  const seen = new Set();

  for (let right = 0; right < arr.length; right++) {
    while (seen.has(arr[right])) {
      seen.delete(arr[left]);
      left++;
    }

    seen.add(arr[right]);

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
console.log(longestUniqueSubarray([1, 2, 3, 1, 2, 3, 4]));

//************************* 7. Maximum Subarray (Kadane's Algorithm - O(n)) ***************************//

function maxSubarray(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];

  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > currentSum + arr[i]) {
      currentSum = arr[i];
      tempStart = i;
    } else {
      currentSum += arr[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return arr.slice(start, end + 1);
}
console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

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
