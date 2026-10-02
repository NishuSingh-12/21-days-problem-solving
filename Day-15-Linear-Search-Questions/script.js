//************************* 12. Find the First String That Starts With a Given Character ***************************//

function findStartStr(arr, char) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === char) {
      return arr[i];
    }
  }
  return null;
}
console.log(findStartStr(["apple", "ball", "cat", "apply"], "a"));
