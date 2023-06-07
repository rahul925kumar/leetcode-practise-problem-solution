/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var count = 2
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] != nums[count - 2]) {
      nums[count] = nums[index];
      count++;
    }
  }
  nums.splice(count, nums.length)
};