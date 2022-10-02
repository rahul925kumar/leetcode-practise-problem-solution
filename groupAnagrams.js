/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function (strs) {
    const arr = []
    const map = {}
    for (let i = 0; i < strs.length; i++) {
        const strSorted = strs[i].split('').sort().join('')
        if (map[strSorted] !== undefined) {
            arr[map[strSorted]].push(strs[i])
        } else {
            arr.push([strs[i]])
            map[strSorted] = arr.length - 1
        }
    }
    return arr;
};