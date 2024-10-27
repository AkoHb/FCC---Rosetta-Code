const add12Hours = str => {
    const monthsDaysCount = {
        "January": 31,
        "February": 28,
        "March": 31,
        "April": 30,
        "May": 31,
        "June": 30,
        "July": 31,
        "August": 31,
        "September": 30,
        "October": 31,
        "November": 30,
        "December": 31
    };

    const months = Object.keys(monthsDaysCount);
    const [month, day, year, timeV, zone] = str.split(" ");
    const [hour, min, mm] = [timeV.split(":")[0], timeV.split(":")[1].slice(0, -2), timeV.split(":")[1].slice(-2)];
    if (mm === "am") return [month, day, year, `${hour}:${min}pm`, zone].join(" ");
    if (Number(year) % 4 === 0) monthsDaysCount["February"] = 29;
    let newMM = mm == "am" ? "pm" : "am";
    let newMonth = day == monthsDaysCount[month] && mm == "pm" 
                                    ? months[(months.indexOf(month) + 1) % 12] 
                                    : month;
    let newDay = day == monthsDaysCount[month] ? 1 : Number(day) + 1;
    let newYear = month == months.at(-1) && newMonth == months[0] ? Number(year) + 1 : year;
    return [newMonth, newDay, newYear, `${hour}:${min}${newMM}`, zone].join(" ")
}

const test = () => {
    console.log("Test begin...");
    console.log("...Please wait...");
    const validAns = [
        ["January 17 2017 11:43am EST", "January 17 2017 11:43pm EST"],
        ["March 6 2009 7:30pm EST", "March 7 2009 7:30am EST"],
        ["February 29 2004 9:15pm EST", "March 1 2004 9:15am EST"],
        ["February 28 1999 3:15pm EST", "March 1 1999 3:15am EST"],
        ["December 31 2020 1:45pm EST", "January 1 2021 1:45am EST"]
    ];
    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( add12Hours(arr[0]) === arr[1]) {
            msg[0].push(`All right, the answer for '${arr[0]}' is OK`)
        } else {
            msg[1].push(`No, the answer for ${arr[0]} is FAIL right = '${arr[1]}', your is = '${add12Hours(arr[0])}'`)
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
