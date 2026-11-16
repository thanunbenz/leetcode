var countDigitOne = function (n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        let text = String(i);
        for (let j = 0; j < text.length; j++) {
            if (text[j] === '1') {
                count++;
            }
        }
    }
    console.log(count);
    return count;
}


countDigitOne(13);