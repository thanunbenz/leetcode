function longestCommonPrefix(strs) {
    if (strs.length === 0 || strs[0] === undefined) {
        return "";
    }
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i] || i >= strs[j].length) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
}

input = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(input));
input = ["dog", "racecar", "car"]
console.log(longestCommonPrefix(input));
input = ["ab", "a"]
console.log(longestCommonPrefix(input));
// console.log(input == undefined);
input = ["a", "b"]
console.log(longestCommonPrefix(input));