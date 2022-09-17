/**
 * Find First and Last Position of Element in Sorted Array

 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 If target is not found in the array, return [-1, -1].
 You must write an algorithm with O(log n) runtime complexity.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.includes(target) == false) return [-1, -1];
    let arr = [0, 0];
    let count = 1;
    for (let i = 0; i < nums.length; i++) {
        if(target == nums[i]){
            if(count == 1){
                arr[0]=i;     
            }else{
                arr[1]=i;
            }
            count++;
        }
    }
     
    arr[1]==0 ? arr[1]=arr[0] : arr[1]=arr[1];
    return arr;
};