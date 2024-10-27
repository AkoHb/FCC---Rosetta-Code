const lascii = (cFrom, cTo) => [cFrom, cTo].some(el => el.charCodeAt(0) > 122 || el.charCodeAt(0) < 97) 
        ? "Invalid user input with lower case symbols" 
        : Array.from({length: Math.abs(cTo.charCodeAt(0) - cFrom.charCodeAt(0)) + 1}, (_, i)=> String.fromCharCode(i + Math.min(cTo.charCodeAt(0),cFrom.charCodeAt(0))))

const test = () => {
    console.log("Test is begin...")
    const validAns = [
        ['a','d', [ 'a', 'b', 'c', 'd' ]],
        ['c','i', [ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]],
        ['m','q', [ 'm', 'n', 'o', 'p', 'q' ]],
        ['k','n', [ 'k', 'l', 'm', 'n' ]],
        ['t','z', [ 't', 'u', 'v', 'w', 'x', 'y', 'z' ]]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( JSON.stringify(lascii(arr[0], arr[1])) === JSON.stringify(arr[2])) {
            msg[0].push(`All right, the answer between "${arr[0]}" and "${arr[1]}" is OK`)
        } else {
            msg[1].push(`No, the answer between "${arr[0]}" and "${arr[1]}" is FAIL \nValid answer is [${arr[2]}], \nYour answer is [${lascii(arr[0], arr[1])}]`)
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

    console.log("Test ends...")
}

test();