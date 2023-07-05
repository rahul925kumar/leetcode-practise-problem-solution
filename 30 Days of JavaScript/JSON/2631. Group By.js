/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
  let result = {};

  for (let i = 0; i < this.length; i++) {
    let key = fn(this[i]);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(this[i]);
  }

  return result;
};



/* Input:
array = [
  { "id": "1" },
  { "id": "1" },
  { "id": "2" }
],
  fn = function (item) {
    return item.id;
  }
Output:
{
  "1": [{ "id": "1" }, { "id": "1" }],
    "2": [{ "id": "2" }]
} */