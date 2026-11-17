function isValid(s) {
    let stack = [];
    let pattern = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        // console.log("char: ", char);

        if (pattern[char]) {
            char = pattern[char];
            // console.log("expected: ", char);
            stack.push(char);
        } else if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}


console.log(isValid("()"));