// *************************** Execution Context **********************//
function a() {
  let num = 1;
  b();
  console.log("Running Function a");
  return num;
}

function b() {
  let num = 2;
  c();
  console.log("Running Function b");
  return num;
}

function c() {
  let num = 3;
  console.log("Running Function c");
  return num;
}

a();

console.log("Ended");

// *************************** 1. Print Numbers from 1 To N Using Recursion **********************//

function printNumbers1ToN(n) {
  if (n < 0) {
    console.log("Please enter a positive number");
    return;
  }
  if (n === 0) return;
  printNumbers(n - 1);
  console.log(n);
}
printNumbers1ToN(5);

// *************************** 2. Print Numbers from N To 1 Using Recursion **********************//

function printNumbersNto1(n) {
  if (n < 0) {
    console.log("Please enter a positive number");
    return;
  }
  if (n === 0) return;
  console.log(n);
  printNumbersNto1(n - 1);
}
printNumbersNto1(5);

// *************************** 3. Find Factorial of a Number Using Recursion **********************//

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// *************************** 4. Find the Sum of First N Natural Numbers Using Recursion **********************//

function sumOfNnaturalNumbers(n) {
  if (n <= 0) throw new Error("Only natural numbers are supported");
  if (n === 1) return 1;
  return n + sumOfNnaturalNumbers(n - 1);
}
console.log(sumOfNnaturalNumbers(0));

// *************************** 5. Calculate Power Using Recursion **********************//

function calculatePow(a, b) {
  if (b === 0) return 1;
  return a * calculatePow(a, b - 1);
}
console.log(calculatePow(2, 5));

// *************************** 6. Find The Sum Of Digits Of a Number Using Recursion **********************//

function sumOfDigits(digits) {
  if (digits === 0) return 0;
  let digit = digits % 10;
  return digit + sumOfDigits(Math.floor(digits / 10));
}
console.log(sumOfDigits(1234));

// *************************** 7. Reverse a Number Using Recursion **********************//

function reverseNumber(num, reverse = 0) {
  if (num === 0) return reverse;
  let digit = num % 10;
  reverse = reverse * 10 + digit;
  return reverseNumber(Math.floor(num / 10), reverse);
}
console.log(reverseNumber(123));

// *************************** 8. Find the Product of Digits Of a Number Using Recursion **********************//

function productOfDigits(digits) {
  if (digits >= 0 && digits < 10) return digits;
  let digit = digits % 10;
  return digit * productOfDigits(Math.floor(digits / 10));
}
console.log(productOfDigits(0));
console.log(productOfDigits(1234));

// *************************** 9. Check if a Number is Palindrome Using Recursion **********************//

function isPalindrome(num, original = num, reverse = 0) {
  if (num === 0) {
    return original === reverse;
  }
  let digit = num % 10;
  reverse = reverse * 10 + digit;
  return isPalindrome(Math.floor(num / 10), original, reverse);
}
console.log(isPalindrome(121));

// *************************** 10. Count How Many Zeros Are Present in a Number Using Recursion **********************//

function countZeros(num, count = 0) {
  if (num === 0) {
    return count;
  }
  let digit = num % 10;
  if (digit === 0) {
    count++;
  }
  return countZeros(Math.floor(num / 10), count);
}
console.log(countZeros(1020030));

// *************************** 11. Print All Natural Numbers Between Two Given Numbers **********************//

function printAllNumbers(start, end) {
  if (start > end) {
    return;
  }
  console.log(start);
  printAllNumbers(start + 1, end);
}
printAllNumbers(3, 8);

// *************************** 12. Find the Sum of Even Numbers from 1 To N Using Recursion **********************//

function sumOfEven(num, sum = 0) {
  if (num === 0) return sum;
  if (num % 2 === 0) {
    return sumOfEven(num - 1, sum + num);
  }
  return sumOfEven(num - 1, sum);
}
console.log(sumOfEven(10));
