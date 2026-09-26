//************************* 1. Sort an Array in Ascending Order Using Bubble Sort ***************************//

function bubbleSortAsceOrder(arr) {
  let loopCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
      loopCount++;
    }
    if (!swapped) {
      break;
    }
  }
  console.log({ loopCount });
  return arr;
}
console.log(bubbleSortAsceOrder([15, 33, 8, 54, 2, 1, 7, 100, 300, 5]));

//************************* 2. Sort Array in Descending Order Using Bubble Sort ***************************//

function bubbleSortDescOrder(arr) {
  let loopCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
      loopCount++;
    }
    if (!swapped) {
      break;
    }
  }
  console.log({ loopCount });
  return arr;
}
console.log(bubbleSortDescOrder([5, 3, 8, 4, 2, 6, 0]));

//************************* 3. Sort a String Alphabetically Using Bubble Sort Logic ***************************//

function sortStrAlphabetically(str) {
  str = str.split("");
  for (let i = 0; i < str.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < str.length - 1 - i; j++) {
      if (str[j].toLowerCase() > str[j + 1].toLowerCase()) {
        let temp = str[j];
        str[j] = str[j + 1];
        str[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return str.join("");
}
console.log(sortStrAlphabetically("javaScript"));

//************************* 4. Sort an Array and Count The Number of Swaps Performed ***************************//

function countSwapsPerformed(arr) {
  let swaps = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
        swaps++;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return { arr, swaps };
}
console.log(countSwapsPerformed([4, 3, 2, 1]));

//************************* 5. Sort Only the Even Numbers in an Array(Odd Numbers Stay in Place) ***************************//

function sortArrayForEvenNumbers(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1] && arr[j] % 2 === 0 && arr[j + 1] % 2 === 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
console.log(sortArrayForEvenNumbers([9, 4, 2, 7, 6, 5]));

//************************* 6. Sort an Array of String by Length (Shortest to Longest) ***************************//

function sortStrByLength(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < str.length - 1 - i; j++) {
      if (str[j].length > str[j + 1].length) {
        let temp = str[j];
        str[j] = str[j + 1];
        str[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return str;
}
console.log(sortStrByLength(["hi", "javascript", "is", "fun"]));

//************************* 7. Sort an Array of Object by Age (Ascending) ***************************//

function sortArrayOfObjByAge(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].age > arr[j + 1].age) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
console.log(
  sortArrayOfObjByAge([
    { name: "A", age: 25 },
    { name: "B", age: 20 },
    { name: "C", age: 30 },
  ]),
);

//************************* 8. Sort an Array but Keep Zeros at the End(Zeros Fixed) ***************************//

function sortArrayKeepZerosAtEnd(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos] = arr[i];
      pos++;
    }
  }
  while (pos < arr.length) {
    arr[pos] = 0;
    pos++;
  }
  return arr;
}
console.log(sortArrayKeepZerosAtEnd([3, 0, 5, 0, 2, 1]));

//************************* 9. Sort a 2D Array by The First Element of Each subarray ***************************//

function sort2DArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j][0] > arr[j + 1][0]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
console.log(
  sort2DArray([
    [3, "c"],
    [1, "a"],
    [2, "b"],
  ]),
);

//************************* 10. Sort an Array in Ascending Order but Stop After K Passes ***************************//

function sortArrayStopAfterK(arr, k) {
  for (let i = 0; i < k; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
console.log(sortArrayStopAfterK([5, 4, 3, 2, 1], 2));
