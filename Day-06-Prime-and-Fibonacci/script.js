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
