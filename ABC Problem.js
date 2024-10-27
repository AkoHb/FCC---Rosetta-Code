const validAlph = [ 
    'BO',
    'XK',
    'DQ',
    'CP',
    'NA',
    'GT',
    'RE',
    'TG',
    'QD',
    'FS',
    'JW',
    'HU',
    'VI',
    'AN',
    'OB',
    'ER',
    'FS',
    'LY',
    'PC',
    'ZM' 
];

const hasValidAlph = (arr, alph) => arr.every(symb => alph.some(str => str.split("").includes(symb)));

function canMakeWord(word) {
    const validWord = word.split("").map(symb => symb.toUpperCase());
    let copyValidAlph = [...validAlph];
    if (hasValidAlph(validWord, copyValidAlph)) {
        for (let symb of validWord) {
            let flag = false;
            for(let block of copyValidAlph) {
                if (block.split("").includes(symb)) {
                    flag = true;
                    let ind = copyValidAlph.indexOf(block);
                    copyValidAlph = copyValidAlph.slice(0, ind).concat(copyValidAlph.slice(ind + 1));
                    break;
                }
            } 
            if (!flag) {
                return false
            }
             
        } 
    }
    return true;
}

const test = () => {
    let testArr = [
        ["bark", true], 
        ["BooK", false],
        ["TReAT", true], 
        ["COMMON", false],
        ["squAD", true],
        ["conFUSE", true]
    ];
    let msg = [[], []];
    
    testArr.forEach(arr => {
        let k = arr[1] === true ? 0 : 1;
        if (canMakeWord(arr[0]) === arr[1] && arr[1] === true) {
            msg[k].push(`The word '${arr[0]}' can be spelled with the given collection of blocks`)
        } else {
            msg[k].push(`The word '${arr[0]}' can't be spelled with the given collection of blocks`)
        }
    })

    console.log(msg)

}

test();