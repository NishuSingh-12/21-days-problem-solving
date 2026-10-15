// *************************** 12. Find the Maximum Value in a Nested Object **********************//

function findMaxValue(obj) {
  let max = -Infinity;
  for (const value of Object.values(obj)) {
    if (typeof value === "number") {
      max = Math.max(max, value);
    } else if (value !== null && typeof value === "object") {
      max = Math.max(max, findMaxValue(value));
    }
  }
  return max;
}
console.log(
  findMaxValue({
    a: 4,
    b: {
      c: 9,
      d: {
        e: 2,
      },
    },
  }),
);
