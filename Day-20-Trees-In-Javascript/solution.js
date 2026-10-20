// *************************** 1. Print All Node Names in the Tree (Depth-First-Order) **********************//

function printTreeNodeNames(node, depth = 0) {
  console.log("  ".repeat(depth) + node.name);
  for (let child of node.children) {
    printTreeNodeNames(child, depth + 1);
  }
}
printTreeNodeNames(mediaTree);

// *************************** 2. Count the Total Number of Nodes in the Tree **********************//

function countTotalNumsOfNodes(node) {
  let count = 1;
  for (const child of node.children) {
    count += countTotalNumsOfNodes(child);
  }
  return count;
}
console.log(countTotalNumsOfNodes(mediaTree));

// *************************** 3. Print Only Leaf Nodes **********************//

function printLeafNodesName(node) {
  if (!node.children.length) console.log(node.name);
  for (let child of node.children) {
    printLeafNodesName(child);
  }
}
printLeafNodesName(mediaTree);

// *************************** 4.DOM: Print All Tag Names Inside document.documentElement(DFS) **********************//

function printAllTagNames(node, depth = 0) {
  console.log(" ".repeat(depth) + node.localName);
  for (const child of node.children) {
    printAllTagNames(child, depth + 1);
  }
}
printAllTagNames(document.documentElement);

// *************************** 5.DOM: Count Total Number of Element Inside document.body **********************//

function countTotalEleInsideBody(node) {
  let count = 1;
  for (const child of node.children) {
    count += countTotalEleInsideBody(child);
  }
  return count;
}

console.log(countTotalEleInsideBody(document.body));

// *************************** 6. Count Total Number of Leaf Nodes in the Tree **********************//

function countLeafNodes(node) {
  let count = 0;
  if (!node.children.length) {
    count++;
  }
  for (const child of node.children) {
    count += countLeafNodes(child);
  }
  return count;
}
console.log(countLeafNodes(mediaTree));

// *************************** 7. Find the Maximum Depth of the Tree **********************//

function findMaximumDepth(node) {
  if (node.children.length === 0) {
    return 0;
  }
  let maxDepth = 0;
  for (const child of node.children) {
    const childDepth = findMaximumDepth(child);
    maxDepth = Math.max(maxDepth, childDepth);
  }
  return maxDepth + 1;
}
console.log(findMaximumDepth(mediaTree));

// *************************** 8. Find the Height of the Tree  **********************//

function findTreeHeight(node) {
  if (node.children.length === 0) {
    return 0;
  }
  let maxHeight = 0;
  for (const child of node.children) {
    let childHeight = findTreeHeight(child);
    maxHeight = Math.max(maxHeight, childHeight);
  }
  return maxHeight + 1;
}
console.log(findTreeHeight(mediaTree));

// *************************** 9. Check if a Folder or File Exists in the Tree **********************//

function folderOrFileExists(node, targetName) {
  if (node.name === targetName) {
    return true;
  }
  for (const child of node.children) {
    if (folderOrFileExists(child, targetName)) {
      return true;
    }
  }
  return false;
}
console.log(folderOrFileExists(mediaTree, "cake.png"));

// *************************** 10. Print the Path to a Given File **********************//

function printPath(node, targetName, path = node.name) {
  if (node.name === targetName) {
    return path;
  }
  for (const child of node.children) {
    const result = printPath(child, targetName, `${path}/${child.name}`);

    if (result !== null) {
      return result;
    }
  }
  return null;
}
console.log(printPath(mediaTree, "cake.png"));

// *************************** 11. Print Only Leaf DOM Elements **********************//

function printLeafDomEle(node) {
  if (!node.children.length) {
    console.log(node.localName);
  }
  for (const child of node.children) {
    printLeafDomEle(child);
  }
}
printLeafDomEle(document.body);

// *************************** 12. DOM: Count How Many Times a Specific Tag Appears **********************//

function countAppearsTag(node, targetTag) {
  let count = 0;
  if (node.localName === targetTag) {
    count++;
  }
  for (const child of node.children) {
    count += countAppearsTag(child, targetTag);
  }
  return count;
}
console.log(countAppearsTag(document.body, "div"));
