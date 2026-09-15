//************************* 1. Check if a Number is Prime ***************************//

function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count++;
      const otherPair = num / i;
      if (i !== otherPair) {
        count++;
      }
    }
  }
  return count === 2 ? "Prime Number" : "Not Prime Number";
}

console.log(isPrime(7));

//************************* 2. Check if two numbers are Co-Prime ***************************//

function isCoPrime(num1, num2) {
  let divisor = num1 < num2 ? num1 : num2;
  let dividend = num1 > num2 ? num1 : num2;
  let loop = 0;
  while (dividend % divisor !== 0) {
    loop++;
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }
  return divisor === 1 ? "Co-Prime" : "Not Co-Prime";
}

console.log(isCoPrime(9, 8));

//************************* 3. Print Fibonacci Series up to N ***************************//

function Fibonacci(num) {
  const series = [0n, 1n];

  for (let i = 2; i < BigInt(num); i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}
console.log(Fibonacci(100));

//************************* 4. Find the Nth Fibonacci Number***************************//

function nthFibonacci(num) {
  const series = [0n, 1n];

  for (let i = 2; i < BigInt(num); i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series[series.length - 1];
}
console.log(nthFibonacci(8));

//************************* 5. Check if a Number Belongs to the Fibonacci Series ***************************//

function belongToFibonacci(num) {
  return (
    Number.isInteger(Math.sqrt(5 * num ** 2 + 4)) ||
    Number.isInteger(Math.sqrt(5 * num ** 2 - 4))
  );
}
console.log(belongToFibonacci(21));

//************************* 6. Print All Prime Numbers up to N ***************************//

function printAllPrime(num) {
  for (let i = 1; i <= num; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      console.log(i);
    }
  }
}
printAllPrime(20);

//************************* 7. Sum of All Prime Numbers till N ***************************//

function sumOfPrime(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfPrime(10));

//************************* 8. Check if Two Numbers are Twin Prime ***************************//

function isTwinPrime(num1, num2) {
  let count1 = 0;
  let count2 = 0;

  let max = num1 > num2 ? num1 : num2;

  for (let i = 1; i <= max; i++) {
    if (num1 % i === 0) {
      count1++;
    }
    if (num2 % i === 0) {
      count2++;
    }
  }
  let difference = Math.abs(num1 - num2);

  if (count1 === 2 && count2 === 2 && difference === 2) {
    console.log("Twin Prime");
  } else {
    console.log("Not Twin Prime");
  }
}

isTwinPrime(5, 7);

//************************* 9. Print All Fibonacci Numbers up to a Given Limit ***************************//

function fibonacciWithLimit(num) {
  let first = 0;
  let second = 1;
  let next = 0;
  while (first <= num) {
    console.log(first);
    next = first + second;
    first = second;
    second = next;
  }
}

fibonacciWithLimit(100);

//************************* 10. Generate Fibonacci Numbers Within a Range ***************************//

function fibonacciWithRange(start, end) {
  let first = 0;
  let second = 1;
  let next = 0;
  while (first <= end) {
    if (first >= start) {
      console.log(first);
    }
    next = first + second;
    first = second;
    second = next;
  }
}

fibonacciWithRange(10, 100);

//************************* 11. Find the Sum of Even Fibonacci Numbers up to N ***************************//

function sumOfEvenFib(num) {
  let first = 0;
  let second = 1;
  let next = 0;
  let sum = 0;
  while (first <= num) {
    if (first % 2 === 0) {
      sum += first;
    }
    next = first + second;
    first = second;
    second = next;
  }
  console.log(sum);
}
sumOfEvenFib(100);

//************************* 12. Print First N Prime Fibonacci Numbers ***************************//

function printPrimeFibonacci(n) {
  let first = 0;
  let second = 1;
  let count = 0;

  while (count < n) {
    let factorCount = 0;

    for (let i = 1; i <= first; i++) {
      if (first % i === 0) {
        factorCount++;
      }
    }

    if (factorCount === 2) {
      console.log(first);
      count++;
    }

    let next = first + second;
    first = second;
    second = next;
  }
}

printPrimeFibonacci(5);
