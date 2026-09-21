//************************* 1. Find if One String is a Substring of Another(Manual Method)  ***************************//

function isSubString(str, substr) {
  for (let i = 0; i < str.length - substr.length; i++) {
    let match = true;
    for (let j = 0; j < substr; j++) {
      if (str[i + j] !== substr[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
}
console.log(isSubString("abcde", "cd"));

//************************* 2. Manual Substring Search (Without using indexOf)  ***************************//

function indexOf(str, substr) {
  for (let i = 0; i < str.length - substr.length; i++) {
    let match = true;
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }
  return -1;
}
console.log(indexOf("Hello world", "wor"));

//************************* 3. Check if One String is Rotation of Another ***************************//

function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  s1 = s1 + s1;
  for (let i = 0; i < s1.length - s2.length; i++) {
    let match = true;
    for (let j = 0; j < s2.length; j++) {
      if (s1[i + j] !== s2[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
}
console.log(isRotation("abcde", "cdeab"));

//************************* 4. Count Frequency of Each Word in a Sentence ***************************//

function countFreqOfWord(str) {
  let words = [];
  let word = "";
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else {
      if (word !== "") {
        words.push(word);
        word = "";
      }
    }
  }
  if (word !== "") {
    words.push(word);
  }
  for (let i = 0; i < words.length; i++) {
    freq[words[i]] = (freq[words[i]] || 0) + 1;
  }
  return freq;
}
console.log(countFreqOfWord("i love coding and i love javascript"));

//************************* 5. Check if a String is a Pangram ***************************//

function isPangram(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  str = str.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (!str.includes(alphabet[i])) {
      return "Not Pangram";
    }
  }
  return "Pangram";
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"));

//************************* 6. Remove All Duplicate Words From a Sentence ***************************//

function removeAllDuplicateWords(str) {
  let words = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else {
      if (word !== "") {
        words.push(word);
        word = "";
      }
    }
  }
  if (word !== "") {
    words.push(word);
  }
  let freq = {};
  let newStr = "";
  for (let i = 0; i < words.length; i++) {
    freq[words[i]] = (freq[words[i]] || 0) + 1;
  }
  for (let key in freq) {
    newStr += key + " ";
  }
  return newStr.trim();
}
console.log(removeAllDuplicateWords("this is is a test test string"));

//************************* 7. Find Longest Palindromic Substring (Brute Force Allowed) ***************************//

function findLongestPalindromicSubstring(str) {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let sub = str.slice(i, j + 1);

      let reverse = "";

      for (let k = sub.length - 1; k >= 0; k--) {
        reverse += sub[k];
      }

      if (sub === reverse && sub.length > longest.length) {
        longest = sub;
      }
    }
  }

  return longest;
}

console.log(findLongestPalindromicSubstring("babad"));

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
