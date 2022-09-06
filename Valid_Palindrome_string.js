// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function (s) {
  let finalString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let revString = '';
  for (let i = finalString.length; i >= 0; i--) {
    revString += finalString.charAt(i);
  }
  let result = false;
  finalString === revString ? result = true : result = false;
  return result;
};
