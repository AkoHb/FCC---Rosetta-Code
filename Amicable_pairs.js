const getDiv = n => {
    let res = 0;
    if (n < 1) return 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) res+=i
    }
    return res;
}

function amicablePairsUpTo(maxNum) {
    let res = [];
    for (let i = 1; i <= maxNum; i++) {
        if (getDiv(i) !== i) {
            let xxx = getDiv(getDiv(i))
            if (xxx === i) {
                res.push(i)
            }
        }
    };
    return res.map((el, ind) => {
        if (ind % 2 === 0) {
            return [Number(res[ind]), Number(res[ind+1])]
        } else {
            return 0
        }
    }).filter(arr => arr !== 0)

}
// console.log(amicablePairsUpTo(3000))

function isEqual(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2);
}

const test = () => {
    console.log("Test is begin...")
    const validAns = [
        [300, [[220,284]]],
        [3000, [[220,284],[1184,1210],[2620,2924]]],
        [20000, [[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( isEqual(amicablePairsUpTo(arr[0]), arr[1])) {
            msg[0].push(`All right, the answer for ${arr[0]} nums is similar to valid answer`)
        } else {
            msg[1].push(`No, the answer for ${arr[0]} nums isn't similar to valid answer`)
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