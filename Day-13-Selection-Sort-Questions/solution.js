//************************* 1. Sort an Array in Ascending Order Using Selection Sort ***************************//

function selectionSortAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
console.log(selectionSortAsc([7, 2, 9, 4, 1]));

//************************* 2. Sort an Array in Descending Order Using Selection Sort ***************************//

function selectionSortDsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }
  return arr;
}
console.log(selectionSortDsc([3, 8, 5, 2, 9]));

//************************* 3. Find the Kth Smallest Element Using Selection Logic ***************************//

function findTheKthSmallest(arr, k) {
  for (let i = 0; i < k; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr[k - 1];
}
console.log(findTheKthSmallest([9, 4, 7, 1, 3], 3));

//************************* 4. Selection Sort but Track Index of Minimum for Each Pass ***************************//

function trackMinIndex(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    console.log(`Pass ${i + 1} -> min index = ${minIndex}`);
  }
}
trackMinIndex([7, 2, 9, 4, 1]);

//************************* 5. Sort an Array Of Object by Name ***************************//

function sortObjectByName(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].name.toLowerCase() < arr[maxIndex].name.toLowerCase()) {
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }
  return arr;
}

console.log(
  sortObjectByName([{ name: "Charlie" }, { name: "alice" }, { name: "Bob" }]),
);

//************************* 6. Find the K Largest Elements Without Full Sorting ***************************//

function findKLargestEl(arr, k) {
  const result = [];
  for (let i = 0; i < k; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[maxIndex];
    arr[maxIndex] = temp;
    result.push(arr[i]);
  }
  return result;
}
console.log(findKLargestEl([5, 1, 9, 3, 7], 2));

//************************* 7. Sort a 2D Array by Second Element in Each Subarray ***************************//

function sort2DArrBySecondEl(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][1] < arr[minIndex][1]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
console.log(
  sort2DArrBySecondEl([
    [3, 9],
    [1, 4],
    [2, 5],
  ]),
);

//************************* 8. Sort an Array and Count How Many Times Minimum Changed ***************************//

function countMinimumChanged(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        count++;
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return count;
}
console.log(countMinimumChanged([8, 3, 5, 2, 6]));

//************************* 9. Sort Only Elements at Even Indexes ***************************//

function sortOnlyAtEvenIndx(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    let minIndex = i;
    for (let j = i + 2; j < arr.length; j += 2) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
console.log(sortOnlyAtEvenIndx([9, 4, 7, 6, 3, 2]));

//************************* 10. Sort an Array of Characters by ASCII Value ***************************//

function sortArrByCharacter(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
console.log(sortArrByCharacter(["d", "A", "c", "B"]));
