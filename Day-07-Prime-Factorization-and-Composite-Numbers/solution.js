//************************* 1. Find the Prime Factorization (Return as an array) ***************************//

function primeFactorization(num) {
  const primeFactors = [];
  while (num % 2 === 0) {
    primeFactors.push(2);
    num = num / 2;
  }
  let factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors.push(factor);
      num = num / factor;
    }
    factor += 2;
  }
  if (factor > 2) {
    primeFactors.push(num);
  }
  return primeFactors;
}
console.log(primeFactorization(120));

//************************* 2. Factorization in Exponent Form ***************************//

function primeFactorizationExponent(num) {
  const factors = [];

  let factor = 2;

  while (factor <= Math.sqrt(num)) {
    if (num % factor === 0) {
      let count = 0;

      while (num % factor === 0) {
        count++;
        num = num / factor;
      }

      factors.push(`${factor}^${count}`);
    }

    factor++;
  }

  if (num > 1) {
    factors.push(`${num}^1`);
  }

  return factors.join(" × ");
}

console.log(`120 = ${primeFactorizationExponent(120)}`);

//************************* 3. Distinct Prime Factors Count ***************************//

function countDistinctPrimeFactors(num) {
  let count = 0;

  while (num % 2 === 0) {
    count++;
    num = num / 2;

    while (num % 2 === 0) {
      num = num / 2;
    }
  }

  let factor = 3;

  while (factor <= Math.sqrt(num)) {
    if (num % factor === 0) {
      count++;

      while (num % factor === 0) {
        num = num / factor;
      }
    }

    factor += 2;
  }

  if (num > 1) {
    count++;
  }

  return count;
}

console.log(countDistinctPrimeFactors(120));

//************************* 4. Check if a Number is a Powerful Number ***************************//

function isPowerfulNumber(num) {
  let factor = 2;

  while (factor <= Math.sqrt(num)) {
    if (num % factor === 0) {
      let count = 0;

      while (num % factor === 0) {
        count++;
        num = num / factor;
      }

      if (count < 2) {
        return false;
      }
    }

    factor++;
  }

  if (num > 1) {
    return false;
  }

  return true;
}

console.log(isPowerfulNumber(36));

//************************* 5. Find the Product of All Distinct Prime Factors ***************************//

function productDistinctPrimeFactors(num) {
  let product = 1;
  let factor = 2;

  while (factor <= Math.sqrt(num)) {
    if (num % factor === 0) {
      product *= factor;

      while (num % factor === 0) {
        num = num / factor;
      }
    }

    factor++;
  }

  if (num > 1) {
    product *= num;
  }

  return product;
}

console.log(productDistinctPrimeFactors(150));

//************************* 6. Check if a Number is a Square-Free Number ***************************//

function isSquareFree(num) {
  let factor = 2;

  while (factor <= Math.sqrt(num)) {
    if (num % factor === 0) {
      num = num / factor;

      if (num % factor === 0) {
        return false;
      }
    }

    factor++;
  }

  return true;
}
console.log(isSquareFree(30));

//************************* 7. Check if a Number is a Smith Number ***************************//
function isSmithNumber(num) {
  const original = num;

  function sumOfDigits(n) {
    let sum = 0;

    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }

    return sum;
  }

  function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  if (isPrime(num)) {
    return false;
  }

  const digitSum = sumOfDigits(original);

  let factorSum = 0;
  let factor = 2;

  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      factorSum += sumOfDigits(factor);
      num = num / factor;
    }

    factor++;
  }

  if (num > 1) {
    factorSum += sumOfDigits(num);
  }

  return digitSum === factorSum;
}

console.log(isSmithNumber(666));

//************************* 8. Check if a Number is an Ugly Number ***************************//

function isUglyNumber(num) {
  if (num <= 0) return false;

  while (num % 2 === 0) {
    num = num / 2;
  }

  while (num % 3 === 0) {
    num = num / 3;
  }

  while (num % 5 === 0) {
    num = num / 5;
  }

  return num === 1;
}

console.log(isUglyNumber(18));

//************************* 9. Check if a Number is a Kaprekar Number ***************************//

function isKaprekarNumber(num) {
  if (num < 1) return false;

  const square = num * num;
  const digits = String(num).length;

  const divisor = 10 ** digits;

  const right = square % divisor;
  const left = Math.floor(square / divisor);

  return left + right === num;
}

console.log(isKaprekarNumber(45));

//************************* 10. Check if a Number is a Happy Number ***************************//

function isHappyNumber(num) {
  let seen = new Set();

  while (num !== 1) {
    if (seen.has(num)) {
      return false;
    }

    seen.add(num);

    let sum = 0;

    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }

    num = sum;
  }

  return true;
}

console.log(isHappyNumber(19));

//************************* 11. Number Base Conversion (Any Base to Any Base)  ***************************//

function toDecimal(num, base) {
  let decimal = 0;
  let power = 1;

  while (num > 0) {
    let digit = num % 10;

    decimal += digit * power;

    power *= base;
    num = Math.floor(num / 10);
  }

  return decimal;
}
function fromDecimal(num, base) {
  let result = 0;
  let place = 1;

  while (num > 0) {
    let digit = num % base;

    result += digit * place;

    place *= 10;
    num = Math.floor(num / base);
  }

  return result;
}
function convertBase(num, fromBase, toBase) {
  let decimal = toDecimal(num, fromBase);

  return fromDecimal(decimal, toBase);
}

console.log(convertBase(1011, 2, 10));
console.log(convertBase(11, 10, 2));
console.log(convertBase(101, 2, 8));

//************************* 12. Swap Variable without using Third Variable ***************************//

function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  return [a, b];
}

console.log(swap(10, 20));
