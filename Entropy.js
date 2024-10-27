const entropy = str => Object.values(str
    .split("")
    .reduce((obj, x) => (obj[x] = (obj[x] || 0) + 1) && obj, {}))
    .reduce((tot, x) => tot - x/str.length * Math.log2(x/str.length), 0)


const test = () => {
    console.log("Test is begin...")
    const validAns = [
        ["0", 0],
        ["01", 1],
        ["0123", 2],
        ["01234567", 3],
        ["0123456789abcdef", 4],
        ["1223334444", 1.8464393446710154],
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if (entropy(arr[0]) === arr[1]) {
            msg[0].push(`All right, the answer for "${arr[0]}" is OK`)
        } else {
            msg[1].push(`No, the answer for "${arr[0]}" is FAIL \nValid answer is ${arr[1]}, \nYour answer is ${entropy(arr[0])}`)
        }
    });

    console.log("\nDisplay result...\n");
    msg[0].forEach(msg => console.log(msg));

    if (msg[1].length > 0) {
        console.log("We have some invalid ansvers...");
        msg[1].forEach(msg => console.log(msg));
    } else {
        console.log("\nAll right :)")
    }

    console.log("Test ends...")
}

test();