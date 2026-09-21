//************************* 8. Find the Longest Substring Without Repeating Characters(Sliding Window) ***************************//

function findLongestSubstring(str) {
  let left = 0;
  let longest = "";
  let seen = {};

  for (let right = 0; right < str.length; right++) {
    let char = str[right];

    while (seen[char]) {
      delete seen[str[left]];
      left++;
    }

    seen[char] = true;

    let currentLength = right - left + 1;

    if (currentLength > longest.length) {
      longest = str.slice(left, right + 1);
    }
  }

  return longest;
}

console.log(findLongestSubstring("abcabcbb"));
