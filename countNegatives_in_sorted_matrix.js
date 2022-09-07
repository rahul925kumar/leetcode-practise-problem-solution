// 1351. Count Negative Numbers in a Sorted Matrix


/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    var count = 0;
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            grid[i][j] < 0 ? count++ : count=count ;
        }
    }
    return count;
};
