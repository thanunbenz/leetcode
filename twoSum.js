var twoSum = function (n, t) {
    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
            if (n[i] + n[j] === t) {
                return [i, j];
            }
        }
    }
};

nums = [2, 7, 11, 15], target = 9

twoSum(nums, target)