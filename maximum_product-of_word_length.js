// 318. Maximum Product of Word Lengths using js 

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const chars = new Map();
  for (const word of words) {
    chars.set(word, new Set(word.split('')));
  }
  let max = 0;
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const char1 = chars.get(word1);
    // console.log('char1', char1)
    for (let j = i + 1; j < words.length; j++) {
      const word2 = words[j];
      const char2 = chars.get(word2)
      if (![...char2].some(char => char1.has(char))) {
        // console.log('char2', char2);
        max = Math.max(max, word1.length * word2.length);
          console.log(max)
      }

    }

  }
    return max;
};
