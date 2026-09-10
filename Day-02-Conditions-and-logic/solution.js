//************************* 1. Find the Maximum of three Numbers ***************************//

function maxOfThree(a, b, c) {
  let max;
  if (a >= b && a >= c) {
    max = a;
  } else if (b >= c) {
    max = b;
  } else {
    max = c;
  }
  return max;
}
console.log(maxOfThree(10, 50, 50));

//************************* 2. Check if a Number is Positive, Negative or Zero ***************************//

function checkNumber(num = 0) {
  if (num > 0) return "Positive";
  if (num < 0) return "Negative";
  return "Zero";
}
console.log(checkNumber(5));

//************************* 3. Calculate Electricity Bill ***************************//

function calcElecBill(units) {
  let totalBill;
  if (units > 0 && units <= 100) {
    totalBill = units * 5;
  } else if (units <= 200) {
    totalBill = 100 * 5 + (units - 100) * 7;
  } else if (units <= 300) {
    totalBill = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else {
    totalBill = totalBill = 100 * 5 + 100 * 7 + 100 * 12 + (units - 300) * 12;
  }
  return `Total Bill ${totalBill}₹`;
}

console.log(calcElecBill(230));

//************************* 4. Check if a character is a Vowel or Consonant ***************************//

function isVowelOrConsonant(char) {
  if (typeof char !== "string" || char.length !== 1) {
    return "Not a valid alphabet";
  }
  char = char.toLowerCase();
  if ("aeiou".includes(char)) {
    return "Vowel";
  }
  if (char >= "a" && char <= "z") {
    return "Consonant";
  }
  return "Not a valid alphabet";
}

console.log(isVowelOrConsonant("@"));

//************************* 5. Check if a year is a Leap year ***************************//

function checkLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}

console.log(checkLeapYear(2016));

//************************* 6. Check if a Character is Uppercase,lowercase,Digit,or special character ***************************//

function checkChar(char = "") {
  if (char === "") {
    return "Not a valid character";
  }

  if (typeof char !== "string") {
    return "Digit";
  }

  const code = char.charCodeAt();

  if (code >= 65 && code <= 90) {
    return "Uppercase";
  }

  if (code >= 97 && code <= 122) {
    return "Lowercase";
  }

  if (code >= 48 && code <= 57) {
    return "Digit";
  }

  return "Special character";
}

console.log(checkChar("5"));
