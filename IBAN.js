const ibanLen = { 
	NO:15, BE:16, DK:18, FI:18, FO:18, GL:18, NL:18, MK:19,
	SI:19, AT:20, BA:20, EE:20, KZ:20, LT:20, LU:20, CR:21,
	CH:21, HR:21, LI:21, LV:21, BG:22, BH:22, DE:22, GB:22,
	GE:22, IE:22, ME:22, RS:22, AE:23, GI:23, IL:23, AD:24,
	CZ:24, ES:24, MD:24, PK:24, RO:24, SA:24, SE:24, SK:24,
	VG:24, TN:24, PT:25, IS:26, TR:26, FR:27, GR:27, IT:27,
	MC:27, MR:27, SM:27, AL:28, AZ:28, CY:28, DO:28, GT:28,
	HU:28, LB:28, PL:28, BR:29, PS:29, KW:30, MU:30, MT:31
}

const isValid = iban => {
    const replSpIban = iban.replaceAll(/\s/g, "");
    const replIban = replSpIban.replaceAll(/\W/g, "");
    let countryCode = replSpIban.slice(0,2).toUpperCase();

    if (replSpIban.length !== ibanLen[countryCode] || ibanLen[countryCode] === undefined) {
        console.log(ibanLen[countryCode] === undefined ? "Invalid country code" : replIban.length !== replSpIban.length ? "IBAN contain invalid symbols" : "Code length isn't valid")
        return false;
    }
    let newIban = (replSpIban.slice(4) + replSpIban.slice(0,4)).split("").map((x, indx) => {
        let chCd = x.toUpperCase().charCodeAt(0);
        let msg = ""
        if (chCd >= 65 && chCd <= 90) {
            msg =  `${chCd - 55}`
        } else if (chCd >=48 && chCd <=57) {
            msg = x;
        } else {
            console.log(`Unknown symbol "${x}" at IBAN on position ${indx + 5}`);
        }
        return msg;
    }).join("");
    
    let result = [
        newIban.slice(0,9), 
        newIban.slice(9, 16), 
        newIban.slice(16, 23), 
        newIban.slice(23)
    ].reduce((t, m) => t = String(Number(t + m) % 97),"0")
    
    console.log(result == 1 ? "Valid IBAN" : "Invalid check sum in IBAN")
    
    return result == 1
};




const test = () => {
    const stTime = performance.now();
    console.log("Test is begin...")
    const validAns = [
        ["GB82 WEST 1234 5698 7654 32", true],
        ["GB82 WEST 1.34 5698 7654 32", false],
        ["GB82 WEST 1234 5698 7654 325", false],
        ["GB82 TEST 1234 5698 7654 32", false],
        ["SA03 8000 0000 6080 1016 7519", true]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( isValid(arr[0]) === arr[1]) {
            msg[0].push(`All right, the answer for IBAN: "${arr[0]}" is OK`)
        } else {
            msg[1].push(`No, the answer for IBAN: "${arr[0]}" is FAIL \nValid answer is '${isValid(arr[0])}', \nYour answer is '${arr[1]}'`)
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