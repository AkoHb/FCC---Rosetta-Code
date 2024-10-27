const findXmasSunday = (start, end) => {
    let res = [];
    for (let i = start; i <= end; i++) {
        let d = new Date(`${i}-12-25`);
        if (d.getDay() === 0) res.push(i)
    }
    return res;
}

const test = () => {
    console.log("Test begin...");
    console.log("...Please wait...");
    const validAns = [
        [[1970, 2017], [1977, 1983, 1988, 1994, 2005, 2011, 2016]],
        [[2008, 2121], [2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118]],
    ];
    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( JSON.stringify(findXmasSunday(arr[0][0], arr[0][1])) === JSON.stringify(arr[1])) {
            msg[0].push(`All right, the answer for ${arr[0][0]}-${arr[0][1]} years is OK`)
        } else {
            msg[1].push(`No, the answer for ${arr[0][0]}-${arr[0][1]} years is FAIL right = [${arr[1]}], your is = [${findXmasSunday(arr[0][0], arr[0][1])}]`)
        }
    });

    console.log("\nDisplay result...\n");
    msg[0].forEach(msg => console.log(msg));

    if (msg[1].length > 0) {
        console.log("\nWe have some invalid ansvers...\n");
        msg[1].forEach(msg => console.log(msg));
    } else {
        console.log("\nAll right :)")
    }

    console.log("\nTest ends...")

}

test();