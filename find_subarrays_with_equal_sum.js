// Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.

// Return true if these subarrays exist, and false otherwise.

// A subarray is a contiguous non-empty sequence of elements within an array.
// Input: nums = [4,2,4]
// Output: true
// Explanation: The subarrays with elements [4,2] and [2,4] have the same sum of 6.

var findSubarrays = function(nums) {
    if(nums.length <= 2) return false;
    let arr = new Array();
    for(let i=0; i<nums.length; i++){
        let sum = 0;
        if(nums[i+1]){
            sum =Number(nums[i])+Number(nums[i+1]); 
            console.log(sum)
             if(arr.includes(sum)){
                return true;
            }
            arr.push(sum);
        }
    }
    if(arr.length < 1){
        return true;
    }
    return false;
};
