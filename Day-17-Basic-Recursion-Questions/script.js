// *************************** 12. Find the Sum of Even Numbers from 1 To N Using Recursion **********************//

function sumOfEven(num, sum = 0) {
  if (num === 0) return sum;
  if (num % 2 === 0) {
    return sumOfEven(num - 1, sum + num);
  }
  return sumOfEven(num - 1, sum);
}
console.log(sumOfEven(10));
