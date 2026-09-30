//************************* 1. Sort an Array in Ascending Oredr Using Insertion Sort ***************************//

function insertionSortAsc(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}
console.log(insertionSortAsc([9, 5, 1, 4, 3]));

//************************* 2. Sort an Array in Descending Oredr Using Insertion Sort ***************************//

function insertionSortDec(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}
console.log(insertionSortDec([3, 8, 2, 7, 4]));

//************************* 3. Insert a New Element into an Already Sorted Array (Using Insertion Logic) ***************************//

function insertANewElInSortedArr(arr, newEl) {
  arr.push(newEl);
  let j = arr.length - 2;
  while (j >= 0 && arr[j] > newEl) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = newEl;
  return arr;
}
console.log(insertANewElInSortedArr([1, 3, 5, 6], 4));

//************************* 4. Sort an Array but Keep Odd Numbers Fixed ***************************//

function sortEvenKeepOdd(arr) {
  let evens = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  for (let i = 1; i < evens.length; i++) {
    let curr = evens[i];
    let j = i - 1;
    while (j >= 0 && evens[j] > curr) {
      evens[j + 1] = evens[j];
      j--;
    }
    evens[j + 1] = curr;
  }
  let evenIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = evens[evenIndex];
      evenIndex++;
    }
  }
  return arr;
}

console.log(sortEvenKeepOdd([9, 4, 7, 6, 3, 2]));

//************************* 5. Sort an Array Using Insertion Sort but Print Array After Each Pass ***************************//

function printArrAfterEachPass(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
    console.log(arr);
  }
}
printArrAfterEachPass([5, 2, 4, 6, 1]);

//************************* 6. Find the Position Where an Element Should Be Inserted in a Sorted Array ***************************//

function findElIndex(arr, newEl) {
  arr.push(newEl);
  let j = arr.length - 2;
  while (j >= 0 && arr[j] > newEl) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = newEl;
  return j + 1;
}
console.log(findElIndex([2, 4, 6, 8], 7));

//************************* 7. Check If an Array Becomes Sorted After Inserting One Element ***************************//

function areSortedArr(arr) {
  let curr = arr[arr.length - 1];
  let j = arr.length - 2;

  while (j >= 0 && arr[j] > curr) {
    arr[j + 1] = arr[j];
    j--;
  }

  arr[j + 1] = curr;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}
console.log(areSortedArr([1, 2, 4, 5, 3]));

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
