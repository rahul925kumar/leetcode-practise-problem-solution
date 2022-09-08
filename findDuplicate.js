// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let dup = 0;
  nums.sort();
  for (let j = 1; j < nums.length; j++) {
    nums[j] === nums[j-1] ? dup = nums[j] : dup = dup;
  }
  return dup;
};
