
var containsDuplicate = function(nums) {
    let n = nums.length;
    let result = false;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(nums[j] == nums[i]){
                return true;
            }
            
        }
    }
    return result;
};
