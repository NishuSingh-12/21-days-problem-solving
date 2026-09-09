//************************* 1. Print Numbers from 1 to N ***************************//

// Solution - 1 // Time Complexity O(n)
const num1 = parseInt(prompt("Enter a number"));
for (let i = 1; i <= num1; i++) {
  console.log(i);
}

// Solution - 2 // Time Complexity O(n)
const input = document.querySelector(".number-input");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const number = Number(input.value);
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
});

//********* 2. Print Numbers from N to 1 without changing the loop condition of above question ********//

// Time Complexity O(n)
const num2 = parseInt(prompt("Enter a number"));
for (let i = 1; i <= num2; i++) {
  console.log(num2 - i + 1);
}

//************************* 3. Print All Even Numbers from 1 to N ***************************//

// Time Complexity O(n)
const num3 = 20;
for (let i = 1; i <= num3; i++) {
  if (i % 2 === 0) console.log(i);
}

//************************* 4. Sum of First N Natural Numbers  ***************************//

//Solution - 1. Brute Force Solution  // Time Complexity O(n)
// It takes  69.833984375 ms
console.time();
const num4a = 10000000;
let sum1 = 0;
for (let i = 1; i <= num4a; i++) {
  sum1 += i;
}
console.log(sum1);
console.timeEnd();

// Solution 2.  Optimized Solution // Time Complexity O(1)
// It takes  0.299072265625 ms
console.time();
const num4b = 10000000;
let sum2 = (num4b * (num4b + 1)) / 2;

console.log(sum2);
console.timeEnd();

//************************* 5. Product (Factorial) Of N ***************************//

// Solution 1. //Time Complexity O(n)
console.time();
const num5 = 5;
let factorial = 1;
for (let i = 1; i <= num5; i++) {
  factorial *= i;
}
console.log(factorial);
console.timeEnd();

// Solution 2
const input2 = document.querySelector(".number-input");
const btn2 = document.querySelector("button");
const para = document.querySelector("p");

btn2.addEventListener("click", () => {
  let n = Number(input2.value);
  let product = 1;
  if (n <= 100) {
    for (let i = 1; i <= n; i++) {
      product *= i;
    }
    para.innerText = `Factorial: ${product}`;
  } else {
    para.innerText = "Enter a number between 1 and 100";
  }
});

//************************* 6. Sum of All Even Numbers up to N ***************************//

// Solution 1
const num6a = 10;
let sum6a = 0;
for (let i = 1; i <= num6a; i++) {
  if (i % 2 === 0) {
    sum6a += i;
  }
}
console.log(sum6a);

// Solution 2
const num6b = 10;
let sum6b = 0;
for (let i = 2; i <= num6b; i += 2) {
  sum6b += i;
}
console.log(sum6b);

//************************* 7. Print Squares of Numbers 1 to N ***************************//

// Solution 1
const num7a = 5;
for (let i = 1; i <= num7a; i++) {
  console.log(i ** 2);
}

// Solution 2
const num7b = 5;
for (let i = 1; i <= num7b; i++) {
  console.log(Math.pow(i, 2));
}

//************************* 8. Print all numbers divisible by 3 and 5 up to N ***************************//

const num8 = 30;
for (let i = 3; i <= num8; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

//************************* 9. Find the sum of all odd numbers up to N ***************************//

const num9 = 10;
let sum9 = 0;
for (let i = 1; i <= num9; i += 2) {
  sum9 += i;
}
console.log(sum9);

//************************* 10. Print the cubes of numbers from 1 to N ***************************//

const num10 = 5;
for (let i = 1; i <= num10; i++) {
  // console.log(i ** 3);
  console.log(Math.pow(i, 3));
}

//************************* 11. Print only the numbers that are both even and perfect squares ***************************//

const num11 = 20;
for (let i = 1; i <= num11; i++) {
  let sq = i ** 2;
  if (sq <= num11 && sq % 2 === 0) {
    console.log(sq);
  }
}
