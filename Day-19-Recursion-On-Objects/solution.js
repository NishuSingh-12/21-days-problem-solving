// *************************** 1. Print All Values in a Nested Object **********************//

function printValues(obj) {
  for (let key of Object.keys(obj)) {
    if (obj[key] !== null && typeof obj[key] === "object") {
      printValues(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}
printValues({
  a: 1,
  y: null,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: "Hello",
      },
    },
  },
});

// *************************** 2. Count Total Number of Keys in a Nested Object **********************//

function countKeys(obj) {
  let count = 0;
  const keys = Object.keys(obj);
  for (let key of keys) {
    count++;
    if (typeof obj[key] === "object") {
      count += countKeys(obj[key]);
    }
  }
  return count;
}
console.log(
  countKeys({
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4,
      },
    },
  }),
);

// *************************** 3. Find the Sum of All Numeric Values in a Nested Object **********************//

function sumOfValues(obj) {
  let values = Object.values(obj);
  let sum = 0;
  for (let value of values) {
    if (typeof value === "number") {
      sum += value;
    } else if (value !== null && typeof value === "object") {
      sum += sumOfValues(value);
    }
  }
  return sum;
}

console.log(
  sumOfValues({
    x: 10,
    y: {
      z: 5,
      w: {
        k: 15,
        s: {
          n: 20,
          p: "nishu",
        },
      },
    },
  }),
);

// *************************** 4. Print All Keys in a Nested Object **********************//

function printKeys(obj) {
  for (let key of Object.keys(obj)) {
    console.log(key);
    if (obj[key] !== null && typeof obj[key] === "object") {
      printKeys(obj[key]);
    }
  }
}

printKeys({
  x: 10,
  y: {
    z: 5,
    w: {
      k: 15,
      s: {
        n: 20,
        p: "nishu",
      },
    },
  },
});

// *************************** 5. Convert All String Values to Uppercase in a Nested Object **********************//

function convertValuesToUppercase(obj) {
  for (let key of Object.keys(obj)) {
    if (obj[key] !== null && typeof obj[key] === "object") {
      convertValuesToUppercase(obj[key]);
    } else if (typeof obj[key] === "string") {
      obj[key] = obj[key].toUpperCase();
    }
  }
  return obj;
}
console.log(
  convertValuesToUppercase({
    name: "john",
    details: {
      city: "mumbai",
      role: "dev",
    },
  }),
);

// *************************** 6. Count How Many Times a Key Appears in a Nested Object **********************//

function countAppearsKey(obj, targetKey) {
  let count = 0;
  for (key of Object.keys(obj)) {
    if (key === targetKey) {
      count++;
    }
    if (obj[key] !== null && typeof obj[key] === "object") {
      count += countAppearsKey(obj[key], targetKey);
    }
  }
  return count;
}
console.log(
  countAppearsKey(
    {
      a: 1,
      b: {
        a: 2,
        c: {
          a: 3,
        },
      },
    },
    "a",
  ),
);

// *************************** 7. Find the Depth of a Nested Object **********************//

function findDepthOfAnObj(obj) {
  let maxDepth = 0;

  for (const key of Object.keys(obj)) {
    const value = obj[key];

    if (value !== null && typeof value === "object") {
      maxDepth = Math.max(maxDepth, 1 + findDepthOfAnObj(value));
    }
  }

  return maxDepth;
}
console.log(
  findDepthOfAnObj({
    a: {
      b: {
        c: {
          d: {
            e: 1,
          },
        },
      },
    },
  }),
);

// *************************** 8. Check If a Value Exists in a Nested Object **********************//

function isValueExists(obj, targetVal) {
  let values = Object.values(obj);
  for (let value of values) {
    if (value === targetVal) {
      return true;
    }
    if (value !== null && typeof value === "object") {
      if (isValueExists(value, targetVal)) {
        return true;
      }
    }
  }
  return false;
}
console.log(
  isValueExists(
    {
      name: "A",
      info: {
        age: 25,
        address: {
          city: "Delhi",
        },
      },
    },
    "Delhi",
  ),
);

// *************************** 9. Replace a Value in a Nested Object Using Recursion **********************//

function replaceValue(obj, targetKey, newVal) {
  for (const key of Object.keys(obj)) {
    if (key === targetKey) {
      obj[key] = newVal;
    } else if (obj[key] !== null && typeof obj[key] === "object") {
      replaceValue(obj[key], targetKey, newVal);
    }
  }

  return obj;
}

console.log(
  replaceValue(
    {
      name: "Nishu",
      address: {
        city: "Delhi",
      },
    },
    "city",
    "Bangalore",
  ),
);

// *************************** 10. Count Total Number of Objects Inside a Nested Object **********************//

function countObjs(obj) {
  let objCount = 0;
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    if (value !== null && typeof value === "object") {
      objCount += 1 + countObjs(value);
    }
  }
  return objCount;
}
console.log(
  countObjs({
    a: {},
    b: {
      c: {},
      d: {
        e: {
          f: 1,
        },
      },
    },
  }),
);

// *************************** 11. Find the Path to a Given Key in a Nested Object **********************//

function findPath(obj, targetKey) {
  for (const key of Object.keys(obj)) {
    if (key === targetKey) {
      return key;
    }

    const value = obj[key];

    if (value !== null && typeof value === "object") {
      const path = findPath(value, targetKey);

      if (path !== null) {
        return `${key}.${path}`;
      }
    }
  }

  return null;
}

const data = {
  a: {},
  b: {
    c: {},
    d: {
      e: {
        f: 1,
      },
    },
  },
};

console.log(findPath(data, "f"));

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
