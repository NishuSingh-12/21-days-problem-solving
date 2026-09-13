//************************* 1. Print All Factors of a Number ***************************//

function getAllFactors(num) {
  let factorList = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factorList.splice(factorList.length / 2, 0, i);
      let otherPair = num / i;
      if (i !== otherPair)
        factorList.splice(factorList.length / 2 + 1, 0, otherPair);
    }
  }
  console.log(factorList);
}
getAllFactors(100);

//************************* 2. Print All Multiples of a Number up to N ***************************//

function getAllMultiples(num, limit) {
  const multiples = [];
  for (let i = num; i <= limit; i += num) {
    multiples.push(i);
  }
  console.log(multiples);
}
getAllMultiples(4, 30);

//************************* 3. Find the HCF(Highest Common Factor) or GCD of Two Numbers  ***************************//

function findHCF(num1, num2) {
  let divisor = num1 < num2 ? num1 : num2;
  let dividend = num1 > num2 ? num1 : num2;

  while (dividend % divisor !== 0) {
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }
  console.log(divisor);
}
findHCF(12, 18);

//************************* 4. Find the LCM(Least Common Multiples) of Two Numbers ***************************//

function findLCM(num1, num2) {
  let divisor = num1 < num2 ? num1 : num2;
  let dividend = num1 > num2 ? num1 : num2;
  let LCM;
  while (dividend % divisor !== 0) {
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }
  LCM = (num1 * num2) / divisor;
  console.log(LCM);
}
findLCM(12, 16);

//************************* 5. Count the total Number of Factors of a Number ***************************//

function countFactors(num) {
  let factorList = [];
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factorList.splice(factorList.length / 2, 0, i);
      let otherPair = num / i;
      count++;
      if (i !== otherPair)
        factorList.splice(factorList.length / 2 + 1, 0, otherPair);
      count++;
    }
  }
  console.log(count);
}
countFactors(24);

//************************* 6. Sum of All Factors of a Number ***************************//

function sumOfAllFactors(num) {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      let otherPair = num / i;
      sum += i;
      if (i !== otherPair) {
        sum += otherPair;
      }
    }
  }
  console.log(sum);
}

sumOfAllFactors(12);

//************************* 7. Find greatest Factor of a Number(Other than itself) ***************************//

function greatestFactor(num) {
  for (let i = Math.floor(num / 2); i >= 1; i--) {
    if (num % i === 0) {
      return i;
    }
  }
}

console.log(greatestFactor(36));

//************************* 8. Check if a Number is a Perfect Number  ***************************//

function isPerfectNumber(num) {
  let sum = 1;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      let pair = num / i;

      sum += i;

      if (i !== pair) {
        sum += pair;
      }
    }
  }

  if (sum === num) {
    console.log("Perfect Number");
  } else {
    console.log("Not Perfect Number");
  }
}

isPerfectNumber(28);

//************************* 9. Find the HCF and LCM of Three Numbers  ***************************//
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const a = 8;
const b = 12;
const c = 16;

const hcf = gcd(gcd(a, b), c);
const lcm3 = lcm(lcm(a, b), c);

console.log("HCF:", hcf);
console.log("LCM:", lcm3);
