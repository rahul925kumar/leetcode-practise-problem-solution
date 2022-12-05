/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    findSum(A, N) {
        let min = A[0];
        let max = A[0];
        for (let index = 0; index < A.length; index++) {
            const element = A[index];
            if (element <= min) {
                min = element
            }
            if (element >= max) {
                max = element
            }
        }
        let result = Number(min) + Number(max);
        return result;
    }
}
