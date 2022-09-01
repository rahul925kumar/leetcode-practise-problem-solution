// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.

var divide = function(dividend, divisor) {
    let res = dividend/divisor;
    return res.toString().split('.')[0];
};
