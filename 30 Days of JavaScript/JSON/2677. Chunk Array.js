/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let result = [];
  let subarr = []
  for (let i = 0; i < arr.length; i++) {
    if (subarr.length < size){
    subarr.push(arr[i])
    }else{
      subarr = []
      subarr.push(arr[i])
    }
    if (subarr.length == size || (i == arr.length-1)) {
      result.push(subarr)
    }
  }
  return result
};

//optimized version 
var chunk = function (arr, size) {
  let result = [];
  let subarr = [];

  for (let i = 0; i < arr.length; i++) {
    subarr.push(arr[i]);

    if (subarr.length === size || i === arr.length - 1) {
      result.push(subarr);
      subarr = [];
    }
  }

  return result;
};
