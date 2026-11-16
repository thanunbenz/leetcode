const arr = [
    847, 23, 591, 104, 732, 56, 918, 341, 675, 12,
    483, 829, 167, 954, 38, 612, 275, 791, 443, 89,
    526, 963, 214, 758, 31, 684, 395, 871, 142, 507,
    936, 68, 319, 785, 451, 19, 623, 897, 254, 710,
    83, 564, 982, 176, 738, 402, 915, 47, 651, 293,
    864, 125, 547, 999, 362, 714, 91, 478, 826, 205,
    593, 34, 769, 418, 950, 153, 687, 302, 881, 61,
    534, 972, 246, 805, 117, 649, 390, 923, 74, 561,
    888, 183, 705, 42, 476, 941, 268, 619, 856, 134,
    793, 357, 902, 16, 582, 229, 674, 985, 310, 449
];

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
    return arr;
}

function binarySearch(arr, target) {
    console.log(`Searching for ${target} in the array... for binary search`);
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log(`Found ${target} at index ${mid}`);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else { // arr[mid] > target
            right = mid - 1;
        }
    }
    console.log(`${target} not found in the array`);
    return null;
}

function linearSearch(arr, target) {
    console.log(`Searching for ${target} in the array... for linear search`);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(`Found ${target} at index ${i}`);
            return i;
        }
    }
    console.log(`${target} not found in the array`);
    return null;
}

function pop() {

}

function push() {

}

function Stack() { //last in first out
    let items = [];

}

function Queue() { //first in first out
    let front;
    let rear;

}





const sortedArr = bubbleSort([...arr]);

console.log("Original array:", arr);
console.log("Sorted array:", sortedArr);

binarySearch(sortedArr, 847);
linearSearch(arr, 847);