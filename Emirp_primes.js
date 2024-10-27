// const isPrime = n => {
//     if (n < 2) return false;
//     for (let i = 2; i < Math.sqrt(n); i++) {
//       if ( n % i === 0) return false
//     }
//     return true
// }

function isPrime(n) {
    if (!(n % 2) || !(n % 3)) return 0;

    var p = 1;
    while (p * p < n) {
        if (n % (p += 4) == 0 || n % (p += 2) == 0) {
            return false
        }
    }
    return true
}

const isRevPrime = n => {
    let rev = Number(String(n).split("").reverse().join(""));
    return isPrime(rev) && rev != n;
}

const emirps = (n, r = false) => {
    let res = [];
    let stVal = 11;
    let endVal = res.length;
    
    if (typeof n === "object") {
        stVal = n[0];
        endVal = n[1];
    }

    for (let i = stVal; i < endVal || res.length < n; i ++) {
        if (isPrime(i) && isRevPrime(i)) res.push(i)
    }

    return typeof n === "object" 
                        ? r == false    
                            ? res.length
                            : res
                        :  r == false 
                            ? res.at(-1)
                            : res
}

const test = () => {
    console.log("Test is begin...")
    const validAns = [
        [20, true, [13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]],
        [1000, false, 70529],
        [[7700,8000], true, [7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]],
        [[7700,8000], false, 11]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( JSON.stringify(emirps(arr[0], arr[1])) === JSON.stringify(arr[2])) {
            msg[0].push(`All right, the answer for [${arr[0]}] is OK`)
        } else {
            msg[1].push(`No, the answer for [${arr[0]}] is FAIL \nValid answer is [${arr[2]}], \nYour answer is [${emirps(arr[0], arr[1])}]`)
        }
    });

    console.log("\nDisplay result...\n");
    msg[0].forEach(msg => console.log(msg));

    if (msg[1].length > 0) {
        console.log("We have some invalid answers...");
        msg[1].forEach(msg => console.log(msg));
    } else {
        console.log("\nAll right :)")
    }

    console.log("Test ends...")
}

test();