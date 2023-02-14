var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }

    const result = [];

    function generateCombination(combination, index) {
        if (index === digits.length) {
        result.push(combination);
        return;
        }

        const letters = phoneMap[digits[index]];
        for (let i = 0; i < letters.length; i++) {
        generateCombination(combination + letters[i], index + 1);
        }
    }

    generateCombination("", 0);
    return result;
};
const phoneMap = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};
