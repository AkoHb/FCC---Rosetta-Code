const operation = (op, arr1, arr2) => op === "s_add" 
    ? arr1.map(ar => ar.map(x => x + arr2))
    : [...arr1].map((ar, ind) => {
    let res = [];
        ar.map((el, inda) => {
            switch (true) {
                case (op === "m_add"):
                    res.push(el + arr2[ind][inda]);
                    break;
                case (op === "m_sub"):
                    res.push(el - arr2[ind][inda]);
                    break;
                case (op === "m_div"):
                    res.push(el / arr2[ind][inda]);
                    break;
                case (op === "m_exp"):
                    res.push(el**arr2[ind][inda]);
                    break;
                case (op === "m_mult"):
                    res.push(el*arr2[ind][inda]);
                    break;
                case (op === "m_mult"):
                    res.push(el*arr2[ind][inda]);
                    break;
            }
        })
    return res;
});

const test = () => {
    console.log("Test is begin...")
    const validAns = [
        // operation  / arr1                    / arr2                        / valid ans
        ["m_add",  [[1,2],[3,4]],           [[1,2],[3,4]],                  [[2,4],[6,8]]],
        ["s_add",  [[1,2],[3,4]],           2,                              [[3,4],[5,6]]],
        ["m_sub",  [[1,2],[3,4]],           [[1,2],[3,4]],                  [[0,0],[0,0]]],
        ["m_mult", [[1,2],[3,4]],           [[1,2],[3,4]],                  [[1,4],[9,16]]],
        ["m_div",  [[1,2],[3,4]],           [[1,2],[3,4]],                  [[1,1],[1,1]]],
        ["m_exp",  [[1,2],[3,4]],           [[1,2],[3,4]],                  [[1,4],[27,256]]],
        ["m_add",  [[1,2,3,4],[5,6,7,8]],   [[9,10,11,12],[13,14,15,16]],   [[10,12,14,16],[18,20,22,24]]],
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if (JSON.stringify(operation(arr[0], arr[1], arr[2])) === JSON.stringify(arr[3])) {
            msg[0].push(`All right, the test for operation "${arr[0]}" is OK`)
        } else {
            msg[1].push(`No, the test for operation "${arr[0]}" is FAIL. \nValid ans [${arr[3]}], \nYour's result is [${operation(arr[0], arr[1], arr[2])}]`)
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