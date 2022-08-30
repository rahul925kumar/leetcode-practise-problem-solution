// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function (nums) {
  let single_number = 0;
  if (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
        single_number ^= nums[i];
    } 
  } else {
    single_number = nums[0];
  }
  return single_number;
};
