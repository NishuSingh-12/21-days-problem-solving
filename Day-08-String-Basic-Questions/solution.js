//************************* 1. Reverse a String(Manual Method Only)***************************//

function reverseStr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverseStr("javascript"));

//************************* 2. Check if a String is a Palindrome ***************************//

function isPalindrome(str) {
  let leftIndx = 0;
  let rightIndx = str.length - 1;
  while (leftIndx < rightIndx) {
    if (str[leftIndx] !== str[rightIndx]) return false;
    leftIndx++;
    rightIndx--;
  }
  return true;
}
console.log(isPalindrome("racecar"));

//************************* 3. Count Frequency of Each Character ***************************//

function countFrequency(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;
  }
  return freq;
}

console.log(countFrequency("banana"));

//************************* 4. Find the Most Frequent Character in a String ***************************//

function mostFrequentChar(str) {
  const freq = {};
  let mostChar = "";
  let mostCharCount = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    freq[char] = (freq[char] || 0) + 1;
    if (mostCharCount < freq[char]) {
      mostChar = char;
      mostCharCount = freq[char];
    }
  }
  return mostChar;
}

console.log(mostFrequentChar("success"));

//************************* 5. Check if Two Strings Are Anagrams (Without Sorting) ***************************//

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return;
  const freq = {};
  for (let i = 0; i < str1.length; i++) {
    freq[str1[i]] = (freq[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!freq[char]) return false;
    freq[char]--;
  }
  return true;
}

console.log(areAnagrams("listen", "silent"));

//************************* 6. Find the First Non-Repeating Character ***************************//

function findFirstNonRepeatingChar(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) return str[i];
  }
  return null;
}
console.log(findFirstNonRepeatingChar("aabbcddeff"));

//************************* 7. Remove all Duplicate Characters (Keep First Occurrence) ***************************//

function removeAllDuplicateChars(str) {
  let seen = {};
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!seen[char]) {
      newStr += char;
      seen[char] = true;
    }
  }
  return newStr;
}
console.log(removeAllDuplicateChars("programming"));

//************************* 8. Check is a String Contains Only Alphabets(No Regex) ***************************//

function checkOnlyAlphabet(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (
      !(
        (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) ||
        (char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
      )
    ) {
      return false;
    }
  }

  return true;
}

console.log(checkOnlyAlphabet("HelloWorld123"));
console.log(checkOnlyAlphabet("HelloWorld"));

//************************* 9. Reverse only the Words in a Sentence ***************************//

function reverseWord(sentence) {
  let word = sentence.split(" ");
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i] + " ";
  }
  return reversedWord.trim();
}
console.log(reverseWord("I love coding"));

//************************* 10. Find the Longest Word in a Sentence ***************************//

function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord("coding is beautiful"));

//************************* 11. Count the Number of Words(Manually without split) ***************************//

function countWords(str) {
  let count = 0;
  let inWord = false;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char !== " " && !inWord) {
      count++;
      inWord = true;
    } else if (char === " ") {
      inWord = false;
    }
  }

  return count;
}

console.log(countWords("I love    coding"));

//************************* 12. Find All Substrings of a String(No Built-ins) ***************************//

function findAllSubstrings(str) {
  let sub = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      sub += str[j];
      console.log(sub);
    }
  }
}
findAllSubstrings("abc");

//************************* 13. Compress a String (Basic Run-Length Encoding)  ***************************//

function compressString(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result;
}
console.log(compressString("aaabbc"));
