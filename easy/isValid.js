function isValid(s) {
    let stack = [];
    let pattern = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (pattern[char]) {
            stack.push(char);
        }
    }
    console.log(stack);
    return 0;
}


console.log(isValid("()"));