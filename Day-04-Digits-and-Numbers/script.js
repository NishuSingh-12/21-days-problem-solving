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
