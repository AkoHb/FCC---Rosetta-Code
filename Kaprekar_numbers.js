const isKaprekar = (n, bs) => 
   n <= 1 
     ? n === 1 
        ? true
        : false
      : Array.from({length:Math.floor(Math.log(n**2) / Math.log(bs))}, (_, i) => i + 1)
        .reduce((t, a) => [...t, [Math.floor(t.at(-1)[0] / bs), n**2 % bs**a]], [[n**2, 0]])
        .some(ar => ar.reduce((t,n) => t + n, 0) === n);

const test = () => {
    const stTime = performance.now();
    console.log("Test is begin...")
    const validAns = [
        [1, 10, true],
        [9, 10, true],
        [2223, 10, true],
        [22823, 10, false],
        [9, 17, false],
        [225, 17, true],
        [999, 17, false]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( isKaprekar(arr[0], arr[1]) === arr[2]) {
            msg[0].push(`All right, the answer for ${arr[0]} base to ${arr[1]} is OK;`)
        } else {
            msg[1].push(`No, the answer ${arr[0]} base to ${arr[1]} is FAIL \nValid answer is ${isKaprekar(arr[0], arr[1])}, \nYour  answer is ${arr[2]};`)
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

    console.log(`\nTest ends... Time: ${(endTime - stTime).toFixed(3)} ms.`)
}

test();