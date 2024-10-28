const isMirror = n => n === BigInt(String(n).split("").reverse().join(""));

const getNum = n => n + BigInt(String(n).split("").reverse().join(""))

const isLychrel = n => {
    let res = []; // nums
    for (let i = 0; i < 500; i++) {
        if (res.length === 0) {
            res.push(getNum(BigInt(n)));
        } else {
            res.push(getNum(res.at(-1)));
        }
        if (isMirror(res.at(-1))) return false;
    }

    return true;
}

const test = () => {
    const stTime = performance.now();
    console.log("Test is begin...")
    const validAns = [
        [12, false],
        [55, false],
        [196, true],
        [879, true],
        [44987, false],
        [7059, true]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( isLychrel(arr[0]) === arr[1]) {
            msg[0].push(`All right, the answer for '${arr[0]}' is OK`)
        } else {
            msg[1].push(`No, the answer for '${arr[0]}' is FAIL \nValid answer is '${arr[1]}', \nYour  answer is '${isLychrel(arr[0])}'`)
        }
    });

    console.log("\nDisplay result...\n");
    msg[0].forEach(msg => console.log(msg));

    if (msg[1].length > 0) {
        console.log("\nWe have some invalid ansvers...");
        msg[1].forEach(msg => console.log(msg));
    } else {
        console.log("\nAll right :)")
    }

    const endTime = performance.now();

    console.log(`Test ends... Time: ${(endTime - stTime).toFixed(3)} ms.`)
}

test();
