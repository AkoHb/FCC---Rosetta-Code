const gcd = (a, b) => Array.from({length: Math.min(a, b)}, (_, i) => i + 1).filter(x => [a,b].every(y => Number.isInteger(y / x))).at(-1)

const test = () => {
    console.log("Test is begin...")
    const validAns = [
        [24,36, 12],
        [30,48, 6],
        [10,15, 5],
        [100,25, 25],
        [13,250, 1],
        [1300,250, 50]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( gcd(arr[0], arr[1]) === arr[2]) {
            msg[0].push(`All right, the answer for '${arr[0]}' and '${arr[1]}' is OK`)
        } else {
            msg[1].push(`No, the answer for '${arr[0]}' and '${arr[1]}' is FAIL \nValid answer is "${arr[2]}", \nYour answer is '${gcd(arr[0], arr[1])}'`)
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