const compressData = str => {
    let dict = Array.from({length: 256}, (_, i) => i).reduce((ob, el) => {
        ob[String.fromCharCode(el)] = el;
        return ob
    }, {}); 
    let ansiiSize = 256;
    let res = [];
    let wrd = "";

    for (let i = 0; i <= str.length; i++) {
        let curWrd = wrd + str[i] || "";
        if (dict.hasOwnProperty(curWrd)) {
            wrd = curWrd;
        } else {
            res.push(dict[wrd]);
            dict[curWrd] = ansiiSize++;
            wrd = str[i];
        }
    }

    return res
}


const decompressData = arr => {
    let dict = Array.from({length: 256}, (_, i) => i).reduce((ob, el) => {
        ob[el] = String.fromCharCode(el);
        return ob
    }, {});
    let res = [dict[arr[0]]];
    let ansiiSize = 256;                            
    let curWrd = dict[arr[0]]; 
    for (let i = 1; i < arr.length; i++) {
        if (dict[arr[i]]) {
            res.push(dict[arr[i]]);
        } else {
            if (arr[i] === ansiiSize) {
                res.push(curWrd + curWrd[0]);
            } else {
                console.debug("Invalid value of dictionary")
            }
        }
        dict[ansiiSize++] = curWrd + res.at(-1)[0];
        curWrd = res.at(-1);
    }
    
    return res.join("")
};

const LZW = (isCompressData, input) => {
    
    return isCompressData ? compressData(input) : decompressData(input);
}

const test = () => {
    const stTime = performance.now();
    console.log("Test is begin...")
    const validAns = [
        [true, "TOBEORNOTTOBEORTOBEORNOT", [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263]],
        [false, [84, 79, 66, 69, 79, 82, 78, 79, 84, 256, 258, 260, 265, 259, 261, 263], "TOBEORNOTTOBEORTOBEORNOT"],
        [true, "0123456789", [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]],
        [false, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57], "0123456789"],
        [true, "BABAABAAA", [66, 65, 256, 257, 65, 260]],
        [false, [66, 65, 256, 257, 65, 260], "BABAABAAA"]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach((arr, i) => {
        if ( JSON.stringify(LZW(arr[0], arr[1])) === JSON.stringify(arr[2])) {
            msg[0].push(`All right, the answer for LINE ${i+1} is OK`)
        } else {
            msg[1].push(`No, the answer for LINE ${i+1} is FAIL \nValid answer is [${arr[2]}], \nYour  answer is '${LZW(arr[0], arr[1])}'`)
        }
    });

    console.log("\nDisplay result...\n");
    msg[0].forEach(msg => console.log(msg));

    if (msg[1].length > 0) {
        console.log("\nWe have some invalid ansvers...");
        msg[1].forEach(msg => console.log(msg));
    } else {
        console.log("\nAll right :)")
    }

    const endTime = performance.now();

    console.log(`Test ends... Time: ${(endTime - stTime).toFixed(3)} ms.`)
}

test();