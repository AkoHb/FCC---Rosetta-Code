const eth_mult = (a, b) => 
    Array.from({length: Math.floor(Math.log2(a)) + 1}, (_, i) => b * 2**i)
        .filter((x, ind) => Math.floor(a / 2**ind) % 2 !== 0)
        .reduce((tot, x) => tot+x, 0);

const test = () => {
    console.log("Test is begin...")
    const validAns = [
        [17, 34, 578],
        [23, 46, 1058],
        [12, 27, 324],
        [56, 98, 5488], 
        [63, 74, 4662]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( eth_mult(arr[0], arr[1]) === arr[2]) {
            msg[0].push(`All right, the answer for nums ${arr[0]} and ${arr[1]} is OK`)
        } else {
            msg[1].push(`No, the answer for nums ${arr[0]} and ${arr[1]} is FAIL \nValid answer is ${arr[2]}, \nYour answer is ${eth_mult(arr[0], arr[1])}`)
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