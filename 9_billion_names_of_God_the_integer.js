const numberOfNames = num => {
    let arr = [[1]];
    for(let n = arr.length; n <= num; n++) {
        let res = [0]; 
        for (let k = 1; k <= n; k++) {
            res.push(res.at(-1) + arr[n-k][Math.min(k, n-k)]);
        }
        arr.push(res)
    }
    return Array.from({length: num}, (_, i) => arr[num][i+1] - arr[num][i]).reduce((tot, x) => tot + x, 0)
}


const test = () => {
    console.log("Test starts....");
    console.log("Please wait....");
    const res = [[5, 7], [12, 77], [18, 385], [23, 1255], [42, 53174], [123, 2552338241]]  // [rows, ans]

    res.forEach(arr => {
        if (numberOfNames(arr[0]) === arr[1]) {
            console.log(`Result for ${arr[0]} rows is valid ${arr[1]} = ${numberOfNames(arr[0])}`);
        } else if (rrr !== arr[1]) {
            numberOfNames(arr[0]).log(`Result for ${arr[0]} rows is invalid ${arr[1]} != ${numberOfNames(arr[0])}`);
        }
    });

    if (res.every(arr => numberOfNames(arr[0]) === arr[1])) {
        console.log("\n"+ "Well done! All right" + "\n")
    }
    console.log("Test ends...")
}

test();