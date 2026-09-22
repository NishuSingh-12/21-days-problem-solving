//************************* 1. Find the Maximum and Minimum Element ***************************//

function findMinMax(arr) {
  let min = arr[0];
  let max = [0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return `Min = ${min}, Max = ${max}`;
}
console.log(findMinMax([10, 25, 3, 18]));

//************************* 2. Reverse an Array (Manual Method Only) ***************************//

function reverseArray(arr) {
  let leftIndx = 0;
  let rightIndx = arr.length - 1;
  while (leftIndx < rightIndx) {
    const temp = arr[leftIndx];
    arr[leftIndx] = arr[rightIndx];
    arr[rightIndx] = temp;
    leftIndx++;
    rightIndx--;
  }
  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

//************************* 3. Check if an Array is Sorted(Ascending) ***************************//

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return "Not Sorted";
    }
  }
  return "Sorted";
}
console.log(isSorted([1, 2, 3, 4, 5]));

//************************* 4. Remove All Duplicates From an Array(Use filter method) ***************************//

function removeDuplicates(arr) {
  return arr.filter((el, index) => arr.indexOf(el) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5]));

//************************* 5. Merge Two Arrays Without Using concat or spread ***************************//

function mergeArrays(arr1, arr2) {
  const mergeArr = [];
  for (const el of arr1) {
    mergeArr.push(el);
  }
  for (const el of arr2) {
    mergeArr.push(el);
  }
  return mergeArr;
}

console.log(mergeArrays([1, 2, 3], [4, 5]));

//************************* 6. Find the second Largest Element ***************************//

function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(findSecondLargest([10, 20, 4, 45, 99]));

//************************* 7. Rotate an Array to the Right by K steps  ***************************//

function rotateArray(arr, k) {
  for (let i = 0; i < k; i++) {
    let last = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = last;
  }
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

//************************* 8. Check if Two Arrays Are Equal(Same Order) ***************************//

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return "Not Equal";
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return "Not Equal";
    }
  }
  return "Equal";
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));

//************************* 9. Count Even and Odd Numbers in an Array ***************************//

function countEvenOdd(arr) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return { even, odd };
}

console.log(countEvenOdd([2, 5, 7, 8, 10]));

//************************* 10. Find All Unique Pairs Whose Sum Equals a Target ***************************//

function findAllUniquePairs(arr, target) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}
console.log(findAllUniquePairs([1, 2, 3, 4, 5], 6));

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
