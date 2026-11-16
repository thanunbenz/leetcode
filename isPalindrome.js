function isValid(input) {
    let rawInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverseInput = rawInput.split('').reverse().join('');
    return rawInput === reverseInput;
}

console.log(isValid("A man, a plan, a canal: Panama")); // ควรรอดได้ true
console.log(isValid("race a car"));                     // ควรรอดได้ false
console.log(isValid("racecar"));                        // ควรรอดได้ true
console.log(isValid(" "));                              // ควรรอดได้ true
console.log(isValid("a."));                             // ควรรอดได้ true
console.log(isValid("0P"));                             // ควรรอดได้ false
