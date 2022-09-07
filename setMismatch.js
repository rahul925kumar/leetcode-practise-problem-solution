 Set Mismatch

Add to List

Share
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let dup = 0;
    let result = [];
      for (let i = 0; i < nums.length; i++) {
        const ele = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
          const ele2 = nums[j];
          ele === ele2 ? dup = ele : dup = dup;
        }
      }
    result[0]=dup;result[1]=findMissing(nums);
    return result;
    
};

const findMissing = (nums) => {
    let missing = 0;
    let set = new Set();
    for (let num of nums) {
       if (!set.has(num)) set.add(num);
    }
    let n = 1;
    while (n <= nums.length) {
        if (!set.has(n)) missing=n;
        n++;
    }
    return missing;
}
