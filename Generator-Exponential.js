const exponentialGenerator = n => Array.from({length: n + 1}, (_, i) => Number.isInteger((i+2)**(1/3)) ? (i+3)**2 : (i+2)**2).at(-1)

const test = () => {
    console.log("Test is begin...")
    const validAns = [
        [10, 144],
        [12, 196],
        [14, 256],
        [20, 484],
        [25, 784],
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( exponentialGenerator(arr[0]) === arr[1]) {
            msg[0].push(`All right, the answer for ${arr[0]} is OK`)
        } else {
            msg[1].push(`No, the answer for ${arr[0]} is FAIL \nValid answer is [${arr[1]}], \nYour answer is [${exponentialGenerator(arr[0])}]`)
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