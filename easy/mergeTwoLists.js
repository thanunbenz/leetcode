class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {

    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    console.log("l1: ", l1);
    console.log("l2: ", l2);
    console.log("current: ", current);

    return dummy.next;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));