//************************* 1. Find an Element Using Binary Search ***************************//

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 3, 5, 5, 5, 7, 9], 7));

//************************* 2. Find the first Occurrence of a Repeated Number ***************************//

function firstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let answer = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      answer = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return answer;
}
console.log(firstOccurrence([2, 4, 4, 4, 9, 11], 4));

//************************* 3. Find the last Occurrence of a Repeated Number ***************************//

function lastOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let answer = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      answer = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return answer;
}
console.log(lastOccurrence([2, 4, 4, 4, 9, 11], 4));

//************************* 4. Find the Smallest Element Greater Than a Given Value ***************************//

function findSmallestGreater(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let answer = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    }
    if (arr[mid] > target) {
      answer = arr[mid];
      right = mid - 1;
    }
  }
  return answer;
}
console.log(findSmallestGreater([3, 5, 8, 12, 17], 10));

//************************* 5. Find the Greatest Element Smaller Than a Given Value ***************************//

function findGreatestSmaller(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let answer = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      answer = arr[mid];
      left = mid + 1;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return answer;
}
console.log(findGreatestSmaller([3, 5, 8, 12, 17], 10));

//************************* 6. Check If a Number is a Perfect Square Using Binary Search ***************************//

function isPerfectSquare(n) {
  if (n === 0 || n === 1) return true;
  let left = 1;
  let right = Math.floor(n / 2);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid < n) {
      left = mid + 1;
    }
    if (mid * mid > n) {
      right = mid - 1;
    }
    if (mid * mid === n) {
      return true;
    }
  }
  return false;
}
console.log(isPerfectSquare(36));

//************************* 7. Find the Peak Element in a Mountain Array(Binary Search Variant) ***************************//

function findPeakElement(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid + 1] > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return `Peak ${arr[left]} at index ${left}`;
}
console.log(findPeakElement([1, 3, 5, 7, 6, 4, 2]));

//************************* 8. Count How Many Times an Element Appears (Using Binary Search Twice) ***************************//

function countAppearsElement(arr, target) {
  let first = firstOccurrence(arr, target);
  let last = lastOccurrence(arr, target);
  let count = last - first + 1;
  if (first === -1) {
    return `Element Not Found`;
  }
  return `${count} times`;
}
console.log(countAppearsElement([1, 2, 2, 2, 3, 4], 2));

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
