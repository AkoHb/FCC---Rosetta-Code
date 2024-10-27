const ack = (m, n) => {
    if (m === 0) return n+1;
    if (m > 0 && n === 0) return ack(m-1, 1);
    if (m > 0 && n > 0) return ack(m-1, ack(m, n-1))
}

const test = () => {
    console.log("Test started... \nPlease wait....\n")
    const validAns = [
        [0,0,1],
        [1,1,3],
        [2,5,13],
        [3,3,61]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( ack(arr[0], arr[1]) === arr[2]) {
            msg[0].push(`All right, the answer for m = ${arr[0]} and n = ${arr[1]} is similar to ${arr[2]}`)
        } else {
            msg[1].push(`No, the answer for m = ${arr[0]} and n = ${arr[1]} isn't similar to ${arr[2]}`)
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

test()