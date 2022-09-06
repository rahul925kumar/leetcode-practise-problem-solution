// Find First Palindromic String in the Array

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

var firstPalindrome = function (words) {
  let result = '';
  for (let j = 0; j < words.length; j++) {
    const element = words[j];
    let finalString = element.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let revString = '';
    for (let i = finalString.length; i >= 0; i--) {
      revString += finalString.charAt(i);
    }
    if (finalString === revString) {
        result = revString;
        return result;
    }
  }
  return result;
};
