//************************* 7. Check Triangle Type using sides and Angles ***************************//

function triangleType(a, b, c) {
  if (a === b && b === c) {
    return "Equilateral";
  } else if (a === b || b === c || a === c) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}

console.log(triangleType(3, 4, 5));
