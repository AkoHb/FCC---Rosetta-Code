const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true
}

const primeGenerator = (num, showPrimes) => {
    let stVal = 2; 

    let res = [];

    if (typeof num !== "number") {
        for (let i = num[0]; i < num[1]; i++) {
            if (isPrime(i)) res.push(i)
        }
    } else {
        while (res.length < num) {
            if (isPrime(stVal)) {
                res.push(stVal)
            }
            stVal ++;
        }
    }

    return showPrimes 
                ? res 
                : typeof num !== "number" 
                    ? res.length
                    : res.at(-1)
}



const test = () => {
    const stTime = performance.now();
    console.log("Test is begin...")
    const validAns = [
        [20, true, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]],
        [[100, 150], true, [101, 103, 107, 109, 113, 127, 131, 137, 139, 149]],
        [[7700, 8000], false, 30],
        [10000, false, 104729]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( JSON.stringify(primeGenerator(arr[0], arr[1])) === JSON.stringify(arr[2])) {
            msg[0].push(`All right, the answer for '${arr[0]}' is OK`)
        } else {
            msg[1].push(`No, the answer for '${arr[0]}' is FAIL \nValid answer is '${arr[2]}', \nYour  answer is '${primeGenerator(arr[0], arr[1])}'`)
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