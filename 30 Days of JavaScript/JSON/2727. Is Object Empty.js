/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Object.keys(obj).length < 1) {
    return true
  } else {
    return false
  }
};