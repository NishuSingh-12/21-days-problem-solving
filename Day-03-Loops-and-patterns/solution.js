//************************* 1. Print Right-Angled Start Triangle ***************************//

function starTriangle(row) {
  for (let i = 1; i <= row; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}
starTriangle(5);

//************************* 2. Print Inverted Right-Angled Start Triangle ***************************//

function invertedStarTriangle(row) {
  for (let i = row; i >= 1; i--) {
    let str = "";
    for (let j = i; j >= 1; j--) {
      str += "*";
    }
    console.log(str);
  }
}
invertedStarTriangle(5);

//************************* 3. Print Pyramid Pattern ***************************//
function pyramidPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= rows - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "*";
    }
    console.log(str);
  }
}
pyramidPattern(5);

//************************* 4. Print Inverted Pyramid ***************************//

function invertedPyramid(rows) {
  for (let i = rows; i >= 1; i--) {
    let str = "";
    for (let k = 1; k <= rows - i; k++) {
      str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}
invertedPyramid(5);

//************************* 5. Print Hollow Square Pattern ***************************//

function hollowSq(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= rows; j++) {
      if (i === 1 || i === rows || j === 1 || j === rows) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

hollowSq(20);

//************************* 6. Print Hollow Pyramid ***************************//

function hollowPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= rows - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i === 1 || i === rows || k === 1 || k === 2 * i - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}
hollowPyramid(10);

//************************* 7. Print Alternating Binary Triangle ***************************//

function alterBinTria(rows) {
  for (let i = 1; i <= rows; i++) {
    let digit = "";

    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) {
        digit += 1;
      } else {
        digit += 0;
      }
    }
    console.log(digit);
  }
}
alterBinTria(10);

//************************* 8. Print Hollow Inverted Pyramid ***************************//

function hollowInvePyra(rows) {
  for (let i = rows; i >= 1; i--) {
    let str = "";
    for (let k = 1; k <= rows - i; k++) {
      str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (i === rows || j === 1 || j === 2 * i - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}
hollowInvePyra(10);

//************************* 9. Print Butterfly Pattern ***************************//

function butterflyPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    for (let s = 1; s <= 2 * (rows - i); s++) {
      str += " ";
    }
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
  for (let i = rows - 1; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    for (let s = 1; s <= 2 * (rows - i); s++) {
      str += " ";
    }
    for (let j = 1; j <= i; j++) {
      str += "*";
    }

    console.log(str);
  }
}
butterflyPattern(8);

//************************* 10. Print Diamond Pattern ***************************//

function diamonPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let s = 1; s <= rows - i; s++) {
      str += " ";
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      str += "*";
    }

    console.log(str);
  }
  for (let i = rows - 1; i >= 1; i--) {
    let str = "";
    for (let s = 1; s <= rows - i; s++) {
      str += " ";
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}

diamonPattern(4);

//************************* 11. Print Hourglass Pattern ***************************//

function hourglassPattern(rows) {
  for (let i = rows; i >= 1; i--) {
    let str = "";
    for (let s = 1; s <= rows - i; s++) {
      str += " ";
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      str += "*";
    }

    console.log(str);
  }
  for (let i = 2; i <= rows; i++) {
    let str = "";
    for (let s = 1; s <= rows - i; s++) {
      str += " ";
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}

hourglassPattern(5);

//************************* 12. Print Hollow Diamond Pattern ***************************//

function hollowDimondPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let s = 1; s <= rows - i; s++) {
      str += " ";
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }

    console.log(str);
  }
  for (let i = rows - 1; i >= 1; i--) {
    let str = "";
    for (let s = 1; s <= rows - i; s++) {
      str += " ";
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

hollowDimondPattern(4);

//************************* 13. Print Rhombus Pattern ***************************//

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
