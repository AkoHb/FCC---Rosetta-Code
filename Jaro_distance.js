const jaro = (str1, str2) => {
    if ([str1, str2].every(x => x.length === 0)) return 1;
    let mxr = Math.floor(Math.max(str1.length, str2.length)/2) - 1
    let mchs = [], trnsp = [0, 0];
    str1.split("").reduce((acc, s, ind) => {
        acc[ind] = Array(str2.length).fill("*");
        let st = Math.max(0, ind - mxr);
        let curStr = str2.slice(st, Math.min(str2.length, ind + mxr + 1));
        curStr.split("").forEach((x, id) => {
            if (s === x) {
                mchs[ind] = 1;
                acc[ind][st + id] = 1;
                acc[ind][ind] === 1 ? trnsp[0]++ : trnsp[1]++
            } else {
                mchs[ind] = mchs[ind] === 1 ? 1 : 0;
                acc[ind][st + id] = 0;
            }
        })
        return acc;
    }, []);

    let m = mchs.reduce((t, x) => t += x === 1 ? 1 : 0, 0);
    // console.log(m, trnsp);
    return (m/str1.length + m/str2.length + (m - (trnsp[0] > trnsp[1] ? trnsp[1] : 0)/2)/m)/3;
};



const test = () => {
    const stTime = performance.now();
    console.log("Test is begin...")
    const validAns = [
        ["MARTHA", "MARHTA", 0.9444444444444445],
        ["DIXON", "DICKSONX", 0.7666666666666666],
        ["JELLYFISH", "SMELLYFISH", 0.8962962962962964],
        ["HELLOS", "CHELLO", 0.888888888888889],
        ["ABCD", "BCDA", 0.8333333333333334],
        // ["DWAYNE", "DUANE", 0.7388888888888889]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if (jaro(arr[0], arr[1]) === arr[2]) {
            msg[0].push(`All right, the answer for "${arr[0]}" && "${arr[1]}" is OK`)
        } else {
            msg[1].push(`No, the answer for "${arr[0]}" && "${arr[1]}" is FAIL \nValid answer is "${arr[2]}", \nYour  answer is "${jaro(arr[0], arr[1])}"`)
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

    const endTime = performance.now();

    console.log(`Test ends... Time: ${(endTime - stTime).toFixed(3)} ms.`)
}

test();