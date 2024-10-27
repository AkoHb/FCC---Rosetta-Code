const ansii = x => x.charCodeAt(0);

const isCusip = str => {
    if (str.length !== 9) return false;
    let res = 0;
    for (let j = 0; j < 7; j++) {
        let c = ansii(str[j])
        let cv = 0;
        if (c >= ansii("0") && c <= ansii("9")) cv = c - 48;
        else if (c >= ansii("A") && c <= ansii("Z")) cv = c - 64
        else if (c == ansii("*")) cv = 36
        else if (c == ansii("@")) cv = 37
        else if (c == ansii("#")) cv = 38
        else return false
        if (ind % 2 === 1) cv *= 2
        res += Math.floor(cv / 10) + cv % 10;
    } 

    return str.charCodeAt(8) - 48 == (10 - (res % 10)) % 10
}
                            


const test = () => {
    const startTime = performance.now();
    console/log("Test begin... \nPlease wait")
    const validAns = [
        ["037833100", true],
        ["17275R102", true],
        ["38259P50a", false],
        ["38259P508", true],
        ["38259P50#", false],
        ["68389X105", true],
        ["68389X106", false],
        ["5949181", false]
    ];
    validAns.forEach(arr => console.log(`
    \nResult for test string ${arr[0]} is 
    ${isCusip(arr[0]) === arr[1] ? "valid" : "invlaid"}
    with results
`));
    const endTime = performance.now();
    console.log(`\nTest ends.... Time is ${(endTime - startTime).toFixed(4)} ms.`)
}






// const isCusip = str => str.length != 9 
//                             ? false 
//                             : str.split("").slice(0, -1).reduce((tot, s, ind) => {
//                                 let cv = 0;
//                                 if (/\d/.test(s)) cv += s.charCodeAt(0) - 48
//                                 else if (["*", "@", "#"].includes(s)) cv += 36 + ["*", "@", "#"].indexOf(s)
//                                 else if (/[A-Z]/.test(s)) cv += s.charCodeAt(0) - 64
//                                 else return tot
//                                 if (ind % 2 == 1) cv *= 2
//                                 tot += Math.floor(cv / 10) + cv % 10;
//                                 return tot
//                             }, 0) == str.charCodeAt(8) - 48


// const test = () => {
//     const startTime = performance.now();
//     console.log("Test begin... \n...Please wait...")
//     const validAns = [
//         ["037833100", true],
//         ["17275R102", true],
//         ["38259P50a", false],
//         ["38259P508", true],
//         ["38259P50#", false],
//         ["68389X105", true],
//         ["68389X106", false],
//         ["5949181", false]
//     ];
//     validAns.forEach(arr => console.log(`Result for test string "${arr[0]}" is ${isCusip(arr[0])=== arr[1] ? "OK" : "FAIL"}`));
//     const endTime = performance.now();
//     console.log(`\nTest ends.... Time is ${(endTime - startTime).toFixed(4)} ms.`)
// }

// test()