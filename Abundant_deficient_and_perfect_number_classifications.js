const getDiv = num => {
    if (num < 1) return 0;
    let prop = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) prop.push(i)
    }
    let pN = prop.reduce((tot, x) => tot + x, 0);
    if (pN < num) return "deficient";
    else if (pN === num) return "perfect";
    else if (pN > num) return "abundant";
}

function getDPA(num) {
    let res = Array(3).fill(0);
    for (let i = 1; i <= num; i++) {
        if (getDiv(i) !== 0) {
            let group = getDiv(i);
            res[["deficient", "perfect", "abundant"].indexOf(group)] += 1;
        }
    }
    return res
 
};

const test = () => {
    console.log("Test is begin...")
    const validAns = [
        [5000, [3758, 3, 1239]],
        [10000, [7508, 4, 2488]],
        [20000, [15043, 4, 4953]]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( getDPA(arr[0]).every(el => arr[1].includes(el))) {
            msg[0].push(`All right, the answer between 1 and ${arr[0]} is similar to [${arr[1]}]`)
        } else {
            msg[1].push(`No, the answer between 1 and ${arr[0]} isn't similar to [${arr[1]}]`)
        }
    });

    console.log("\nDisplay result...\n");
    msg[0].forEach(msg => console.log(msg + "\n"));

    if (msg[1].length > 0) {
        console.log("We have some invalid ansvers...");
        msg[1].forEach(msg => console.log(msg + "\n"));
    } else {
        console.log("All right :)")
    }

    console.log("Test ends...")
}

test();