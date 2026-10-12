// *************************** 1. Print All Elements of an Array Using Recursion **********************//

function printAllElements(arr, index = 0) {
  if (index === arr.length) return;
  console.log(arr[index]);
  return printAllElements(arr, index + 1);
}
printAllElements([1, 2, 3, 4]);

// *************************** 2. Find the Sum of All Elements in an Array Using Recursion **********************//

function sumOfElements(arr, index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + sumOfElements(arr, index + 1);
}
console.log(sumOfElements([2, 4, 6, 8]));

// *************************** 3. Check if an Array Is Sorted (Ascending) Using Recursion **********************//

function isSorted(arr, index = 0) {
  if (index === arr.length) return true;
  if (arr[index] > arr[index + 1]) return false;
  return isSorted(arr, index + 1);
}
console.log(isSorted([1, 2, 3, 5, 4]));

// *************************** 4. Reverse a String Using Recursion **********************//

function reverseStr(str, index = 0) {
  if (index === str.length) return "";
  return reverseStr(str, index + 1) + str[index];
}
console.log(reverseStr("hello"));

// *************************** 5. Check if a String is Palindrome Using Recursion **********************//

function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left >= right) return "Palindrome";
  str = str.toLowerCase();
  if (str[left] !== str[right]) return "Not Palindrome";
  return isPalindrome(str, left + 1, right - 1);
}
console.log(isPalindrome("Madam"));

// *************************** 6. Find the Length of a String Using Recursion **********************//

function findStrLength(str, index = 0) {
  if (index === str.length) return 0;
  return 1 + findStrLength(str, index + 1);
}
console.log(findStrLength("javascript"));

// *************************** 7. Count the Number Of Vowels in a String Using Recursion **********************//

function countVowels(str, index = 0) {
  if (index === 0) str = str.toLowerCase();
  if (index === str.length) return 0;
  return ("aeiou".includes(str[index]) ? 1 : 0) + countVowels(str, index + 1);
}
console.log(countVowels("Education"));

// *************************** 8. Find the First Occurrence of an Element in Array Using Recursion **********************//

function firstOccurrence(arr, element, index = 0) {
  if (index === arr.length) return -1;
  if (arr[index] === element) {
    return index;
  }
  return firstOccurrence(arr, element, index + 1);
}
console.log(firstOccurrence([5, 3, 7, 3, 9], 3));

// *************************** 9. Find the Last Occurrence of an Element in Array Using Recursion **********************//

function lastOccurrence(arr, element, index = arr.length - 1) {
  if (index < 0) return -1;
  if (arr[index] === element) return index;
  return lastOccurrence(arr, element, index - 1);
}
console.log(lastOccurrence([5, 3, 7, 3, 9], 3));

// *************************** 10. Count How Many Times a Character Appears in a String Using Recursion **********************//

function countAppearsChar(str, target, index = 0, count = 0) {
  if (index === str.length) return count;
  if (str[index].toLowerCase() === target.toLowerCase()) {
    count++;
  }
  return countAppearsChar(str, target, index + 1, count);
}
console.log(countAppearsChar("recursion", "r"));

// *************************** 11. Replace All Occurrences of a Character in a String Using Recursion **********************//

function replaceAllOccurrence(str, char, replaceWith, index = 0) {
  if (index === str.length) return "";
  const current = str[index] === char ? replaceWith : str[index];
  return current + replaceAllOccurrence(str, char, replaceWith, index + 1);
}
console.log(replaceAllOccurrence("banana", "a", "x"));

// *************************** 12. Check if All Elements in an Array Are Even Using Recursion **********************//

function areEven(arr, index = 0) {
  if (index === arr.length) return true;
  if (arr[index] % 2 !== 0) return false;
  return areEven(arr, index + 1);
}
console.log(areEven([2, 4, 6, 8]));

// *************************** 13. Find the Maximum Element in an Array Using Recursion **********************//

function findMax(arr, index = 1, max = arr[0]) {
  if (arr.length === 0) return undefined;
  if (index === arr.length) return max;
  if (arr[index] > max) max = arr[index];
  return findMax(arr, index + 1, max);
}
console.log(findMax([7, 3, 9, 2, 10]));
