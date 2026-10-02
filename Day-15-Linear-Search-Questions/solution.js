//************************* 1. Find an Element in an Array Using Linear Search ***************************//

function linearSeach(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return `Found ${el} at index ${i}`;
    }
  }
  return `${el} Not found!`;
}
console.log(linearSeach([4, 2, 7, 1, 9], 7));

//************************* 2. Find the first Occurrence of an Element ***************************//

function findFirstOccurrence(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return `index ${i}`;
    }
  }
  return -1;
}
console.log(findFirstOccurrence([3, 5, 3, 7, 3], 3));

//************************* 3. Find the Last Occurrence of an Element ***************************//

function findLastOccurrence(arr, el) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === el) {
      return `index ${i}`;
    }
  }
  return -1;
}
console.log(findLastOccurrence([3, 5, 3, 7, 3], 3));

//************************* 4. Count How Many Times an Element Appears ***************************//

function countAppearsEl(arr, el) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      count++;
    }
  }
  return `${el} -> Appears ${count} times`;
}
console.log(countAppearsEl([1, 2, 2, 3, 2, 4], 2));

//************************* 5. Find All Indexes Where the Element Appears ***************************//

function findAllIndexes(arr, el) {
  let indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      indexes.push(i);
    }
  }
  return indexes;
}
console.log(findAllIndexes([5, 7, 5, 9, 5], 5));

//************************* 6. Linear Search in Array of Objects ***************************//

function lSInArrOfObj(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return arr[i];
    }
  }
  return null;
}
console.log(
  lSInArrOfObj(
    [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" },
    ],
    2,
  ),
);

//************************* 7. Check if an Element Exists in a 2D Array ***************************//

function isEleExists(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === el) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}
console.log(
  isEleExists(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    4,
  ),
);

//************************* 8. Find the Minimum Value using Linear Scan ***************************//

function findMinValue(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMinValue([9, 3, 5, 1, 7]));

//************************* 9. Find the Maximum Value Using Linear Scan ***************************//

function findMaxValue(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMaxValue([4, 9, 2, 11, 6]));

//************************* 10. Find the First Element Greater Than X ***************************//

function findMaxValue(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) {
      return arr[i];
    }
  }
  return -1;
}
console.log(findMaxValue([2, 5, 9, 12, 15], 10));

//************************* 11. Check if Array is Strictly Increasing (Using Linear Search) ***************************//

function isStrictlyIncreasing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isStrictlyIncreasing([1, 2, 3, 5, 4]));

//************************* 12. Find the First String That Starts With a Given Character ***************************//

function findStartStr(arr, char) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === char) {
      return arr[i];
    }
  }
  return null;
}
console.log(findStartStr(["apple", "ball", "cat", "apply"], "a"));
