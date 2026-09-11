//************************* 13. Print Rhombus Pattern***************************//

function rhombusPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let s = 1; s <= rows - i; s++) {
      str += " ";
    }
    for (let j = 1; j <= rows; j++) {
      str += "*";
    }
    console.log(str);
  }
}
rhombusPattern(5);
