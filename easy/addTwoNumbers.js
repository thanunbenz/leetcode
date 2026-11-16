var addTwoNumbers = function (l1, l2) {
    let current1 = l1;
    let current2 = l2;

    while (current1 !== null) {
        console.log(current1);
        current1 = current1.next;
    }

    while (current2 !== null) {
        console.log(current2);
        current2 = current2.next;
    }

    for (let i = 0; i < l3.length; i++) {
        text += l3[i];
        text2 += l4[i];
    }
    sum = parseInt(text) + parseInt(text2);
    return sum
}


l1 = [2, 4, 3], l2 = [5, 6, 4]

console.log(addTwoNumbers(l1, l2));