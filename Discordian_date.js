const weekdays = ['Sweetmorn', 'Boomtime', 'Pungenday', 'Prickle-Prickle', 'Setting Orange'];
const seasons = ['Chaos', 'Discord', 'Confusion', 'Bureaucracy', 'The Aftermath'];
const apostle = ['Mungday', 'Mojoday', 'Syaday', 'Zaraday', 'Maladay'];
const holidays = ['Chaoflux', 'Discoflux', 'Confuflux', 'Bureflux', 'Afflux'];

const numDays = (y, m) => new Date(y, m, 0).getDate();

function discordianDate(date) {
    // console.log(date.getDate())
  return `${weekdays[([0,1,2,3,4,5,6,7,8,9,10,11].slice(0, date.getMonth()).reduce((tot, x) => tot + numDays(date.getFullYear(), x),0) + date.getDate() + (2022 - date.getFullYear())) % 5]}, the ${59}th day of ${seasons[Math.floor(date.getMonth()/(12/5))]} in the YOLD ${date.getFullYear() + 1166}`;
}

const test = () => {
    console.log("Test is begin...")
    const validAns = [
        [[2010, 6, 22], "Pungenday, the 57th day of Confusion in the YOLD 3176"],
        [[2012, 1, 28], "Prickle-Prickle, the 59th day of Chaos in the YOLD 3178"],
        [[2012, 1, 29], "Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib\'s Day!"],
        [[2012, 2, 1], "Setting Orange, the 60th day of Chaos in the YOLD 3178"],
        [[2010, 0, 5], "Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!"],
        [[2011, 4, 3], "Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!"],
        [[2015, 9, 19], "Boomtime, the 73rd day of Bureaucracy in the YOLD 3181"]
    ];

    let msg = [[], []]; // [[true], [false]]

    validAns.forEach(arr => {
        if ( discordianDate(new Date(arr[0][0], arr[0][1], arr[0][2])) === arr[1]) {
            msg[0].push(`All right, the answer for date "${arr[0]}" is OK`)
        } else {
            msg[1].push(`No, the answer for date "${arr[0]}" is FAIL, \nvalid answer is "${arr[1]}",  \nyour answer is "${discordianDate(new Date(arr[0][0], arr[0][1], arr[0][2]))}"`)
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