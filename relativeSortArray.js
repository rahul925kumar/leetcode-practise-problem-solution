// 1122. Relative Sort Array

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    const map = new Map();
    const n = arr2.length;
    arr2.forEach((a, i) => {
      map.set(a, i);
    });
    return arr1.sort((a, b) => {
      a = map.has(a) ? map.get(a) : n + a;
      b = map.has(b) ? map.get(b) : n + b; return a - b;
    });
};
