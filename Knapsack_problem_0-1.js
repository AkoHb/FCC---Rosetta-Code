const getWeight = arrOfOb => arrOfOb.reduce((t, ob) => ob.hasOwnProperty("weight") ? t + ob.weight : t, 0);
const getValue = arrOfOb => arrOfOb.reduce((t, ob) => t + ob.value , 0);

const isValidData = (items, maxweight) => {
    switch (true) {
        case maxweight < 1:
            console.debug("Max weight less than one");
            break;
        
        case items.length <= 1:
            console.debug("Items list less or equal to 1");
            break;
            
        case items.some(ob => !ob.hasOwnProperty("weight")):
            console.debug("Some list items hasn't 'weight' property: ");
            console.debug(items.filter(ob => !ob.hasOwnProperty("weight")).reduce((msg, a) => msg + " ".repeat(4) + `Line ${items.indexOf(a) + 1} of items: `+ JSON.stringify(a)+ ";\n","[\n")+ "];")
            break;
            
        case items.some(ob => !ob.hasOwnProperty("value")):
            console.debug("Some list items hasn't 'value' property: ");
            console.debug(items.filter(ob => !ob.hasOwnProperty("value")).reduce((msg, a) => msg + " ".repeat(4) + `Line ${items.indexOf(a) + 1} of items: `+ JSON.stringify(a)+ ";\n","[\n")+ "];");
            break;
        
        case items.some(ob => ob["value"] <= 0 ):
            console.debug("Some list items has invalid value of 'value' property. ");
            console.debug(items.filter(ob => ob["value"] <= 0).reduce((msg, a) => msg + " ".repeat(4) + `Line ${items.indexOf(a) + 1} of items: `+ JSON.stringify(a)+ ";\n","[\n")+ "];");
            break;
        
        case items.some(ob => ob["weight"] <= 0 ):
            console.debug("Some list items has invalid value of 'weight' property. ");
            console.debug(items.filter(ob => ob["weight"] <= 0).reduce((msg, a) => msg + " ".repeat(4) + `Line ${items.indexOf(a) + 1} of items: `+ JSON.stringify(a)+ ";\n","[\n")+ "];");
            break;
        
        case items.every(ob => ob["weight"] > maxweight ):
            console.debug("All list items is too heavy...\nVisit gym to move that items :)");
            break;

        default:
            return true;
    }
    return false
}

const getMaxValue = (arOfObj, w, res = [0],  an = []) => {
    let filterArByWght = arOfObj.filter(ob => ob.weight <= w);
    for (let j = 0; j < filterArByWght.length; j++) {
        let cRes = [...an, filterArByWght[j]];
        if (getWeight(cRes) <= w && getValue(cRes) > res[0]) res.unshift(getValue(cRes));
        let newAr = filterArByWght.filter((a, i) => i !== j);
        if (newAr.some(ob => getWeight([...cRes, ob]) < w)) {
            getMaxValue(newAr, w, res, cRes);
        } 
    }
    return res[0]
}

const knapsack = (items, maxweight) =>{
    if (isValidData(items, maxweight)) {
        return getMaxValue(items, maxweight)
    } else {
        console.log("...Choose list with valid data...")
        return 0;
    }
};

const test = () => {
    const stTime = performance.now();
    console.log("Test is begin...")
    const validAns = [
        [
            [
                { name:'map', weight:9, value:150 }, 
                { name:'compass', weight:13, value:35 }, 
                { name:'water', weight:153, value:200 }, 
                { name:'sandwich', weight:50, value:160 },
                { name:'glucose', weight:15, value:60 }, 
                { name:'tin', weight:68, value:45 }, 
                { name:'banana', weight:27, value:60 }, 
                { name:'apple', weight:39, value:40 }
            ], 
            100, 
            405
        ],
        [
            [
                { name:'map', weight:9, value:150 }, 
                { name:'compass', weight:13, value:35 }, 
                { name:'water', weight:153, value:200 }, 
                { name:'sandwich', weight:50, value:160 }, 
                { name:'glucose', weight:15, value:60 }, 
                { name:'tin', weight:68, value:45 }, 
                { name:'banana', weight:27, value:60 }, 
                { name:'apple', weight:39, value:40 }
            ], 
            200,
            510
        ],
        [
            [
                { name:'cheese', weight:23, value:30 }, 
                { name:'beer', weight:52, value:10 }, 
                { name:'suntan cream', weight:11, value:70 },
                { name:'camera', weight:32, value:30 }, 
                { name:'T-shirt', weight:24, value:15 }, 
                { name:'trousers', weight:48, value:10 }, 
                { name:'umbrella', weight:73, value:40 }
            ], 
            100,
            145
        ],
        [
            [
                { name:'cheese', weight:23, value:30 }, 
                { name:'beer', weight:52, value:10 }, 
                { name:'suntan cream', weight:11, value:70 }, 
                { name:'camera', weight:32, value:30 }, 
                { name:'T-shirt', weight:24, value:15 }, 
                { name:'trousers', weight:48, value:10 }, 
                { name:'umbrella', weight:73, value:40 }
            ], 
            200,
            185
        ],
        [
            [
                { name:'waterproof trousers', weight:42, value:70 }, 
                { name:'waterproof overclothes', weight:43, value:75 }, 
                { name:'note-case', weight:22, value:80 }, 
                { name:'sunglasses', weight:7, value:20 }, 
                { name:'towel', weight:18, value:12 }, 
                { name:'socks', weight:4, value:50 }, 
                { name:'book', weight:30, value:10 }
            ], 
            100,
            237
        ],
        [
            [
                { name:'waterproof trousers', weight:42, value:70 }, 
                { name:'waterproof overclothes', weight:43, value:75 }, 
                { name:'note-case', weight:22, value:80 }, 
                { name:'sunglasses', weight:7, value:20 }, 
                { name:'towel', weight:18, value:12 }, 
                { name:'socks', weight:4, value:50 }, 
                { name:'book', weight:30, value:10 }
            ], 
            200,
            317
        ]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach((arr, i) => {
        if ( knapsack(arr[0], arr[1]) === arr[2]) {
            msg[0].push(`All right, the answer for line ${i+1} is OK`)
        } else {
            msg[1].push(`No, the answer for line ${i+1} is FAIL \nValid answer is ${arr[2]}, \nYour  answer is ${knapsack(arr[0], arr[1])};\n`)
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
