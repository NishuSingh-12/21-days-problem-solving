//************************* 1. Split Number into Digits ***************************//

function numToDigits(num) {
  let arr = [];
  while (num > 0) {
    let digit = num % 10;
    arr.unshift(digit);
    num = Math.floor(num / 10);
  }
  return arr;
}
console.log(numToDigits(123456));

//************************* 2. Reverse a Number ***************************//

function reverseNumbers(num) {
  let digitsArr = [];
  while (num > 0) {
    let digit = num % 10;
    digitsArr.unshift(digit);
    num = Math.floor(num / 10);
  }
  let reversedNum = 0;
  for (let i = 0; i < digitsArr.length; i++) {
    reversedNum += digitsArr[i] * 10 ** i;
  }
  return reversedNum;
}
console.log(reverseNumbers(123456));

//************************* 3. Remove the Decimal Point Mathematically ***************************//

function removeDecimal(num) {
  while (num % 1 !== 0) {
    num = num * 10;
  }
  return num;
}
console.log(removeDecimal(12.54));

//************************* 4. Separate whole and Fractional Parts of a Number ***************************//

function wholeAndFractional(num) {
  let whole = Math.floor(num);
  let fractional = Number(num - whole).toFixed(3);
  return `Whole = ${whole} 
Fractional = ${fractional}`;
}

console.log(wholeAndFractional(12.345));

//************************* 5. Generate a Decimal Number from Whole and Fractional Digits ***************************//

function generateDecimalFromWholeAndFractional(wholeDigits, fractionalDigits) {
  let whole = 0;
  let fractional = 0;

  for (let i = 0; i < wholeDigits.length; i++) {
    whole += wholeDigits[i] * 10 ** (wholeDigits.length - i - 1);
  }
  for (let i = 0; i < fractionalDigits.length; i++) {
    fractional += fractionalDigits[i] * 10 ** -(i + 1);
  }
  return whole + Number(fractional.toFixed(10));
}
console.log(generateDecimalFromWholeAndFractional([1, 2], [3, 4]));

//************************* 6.Check if a Number is a Palindrome ***************************//

function isPalindrome(num) {
  let reverse = 0;
  let original = num;
  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  if (reverse === original) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}
console.log(isPalindrome(121));

//************************* 7.Check is an Armstrong Number (also called a Narcissistic Number) ***************************//

function isArmstrongNumber(num) {
  const digit = [];
  const originalNum = num;
  while (num > 0) {
    digit.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  let sumOfPowerNum = 0;
  for (let i = 0; i < digit.length; i++) {
    sumOfPowerNum += digit[i] ** digit.length;
  }
  if (originalNum === sumOfPowerNum) {
    return "Armstrong Number";
  } else {
    return "Not Armstrong Number";
  }
}

console.log(isArmstrongNumber(153));

//************************* 8. Find the Sum of Digits ***************************//

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  console.log(sum);
}
sumOfDigits(987);

//************************* 9. Find the Average of Digits ***************************//

function sumOfDigits(num) {
  let digit = [];
  while (num > 0) {
    digit.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  let sum = 0;
  for (let i = 0; i < digit.length; i++) {
    sum += digit[i];
  }
  return `Average: ${sum / digit.length}`;
}
console.log(sumOfDigits(4567));

//************************* 10. Find the Largest and Smallest Digit in a Number ***************************//

function findLargestAndSmallest(num) {
  const digits = [];
  while (num > 0) {
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  let largest = digits[0];
  let smallest = digits[0];
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] > largest) {
      largest = digits[i];
    }
    if (digits[i] < smallest) {
      smallest = digits[i];
    }
  }
  console.log(`Largest: ${largest}`);
  console.log(`Smallest: ${smallest}`);
}
findLargestAndSmallest(9483);

//************************* 11. Check if a number is a Strong Number ***************************//

function isStrongNum(num) {
  let original = num;
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    let fact = 1;
    for (let i = 1; i <= digit; i++) {
      fact *= i;
    }
    sum += fact;
    num = Math.floor(num / 10);
  }
  if (original === sum) {
    console.log("Strong Number");
  } else {
    console.log("Not a Strong Number");
  }
}

isStrongNum(145);

//************************* 12. Check if a Number is an Automorphic Number   ***************************//

function isAutomorphicNum(num) {
  let square = num * num;
  let digit = String(num).length;
  let lastPart = square % Math.pow(10, digit);
  if (lastPart === num) {
    console.log("Automorphic Number");
  } else {
    console.log("Not a Automorphic Number");
  }
}
isAutomorphicNum(25);

//************************* 13. Find Frequency of Each Digit  ***************************//

function findFrequency(num) {
  let freq = Array(10).fill(0);
  while (num > 0) {
    let digit = num % 10;
    freq[digit]++;
    num = Math.floor(num / 10);
  }
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] > 0) {
      console.log(`digit:${i}, count:${freq[i]}`);
    }
  }
}
findFrequency(122333);

//************************* 14. Check if a Number is a Harshad Number ***************************//

function isHarshadNum(num) {
  let original = num;
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  if (original % sum === 0) {
    console.log("Harshad Number");
  } else {
    console.log("Not Harshad Number");
  }
}

isHarshadNum(18);
