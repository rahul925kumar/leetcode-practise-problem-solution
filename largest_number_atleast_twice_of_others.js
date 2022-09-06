// Largest Number At Least Twice of Others
// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

var dominantIndex = function(nums) {
    let max_val = Math.max(...nums);
    let max_index = nums.indexOf(max_val);
    let len = nums.length;
    for (let i = 0; i < len; i++){
        if (max_index != i && max_val < 2 * nums[i]){
          return -1;
        }
    }
    return max_index;
};
