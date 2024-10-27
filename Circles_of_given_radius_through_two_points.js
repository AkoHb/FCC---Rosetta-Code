const maxRValid = (p1, p2) => Math.sqrt(p1.reduce((tot, el, ind) => tot += (el - p2[ind])**2, 0)) / 2;

const angle = (p1, p2) => Math.atan(p1.map((el, ind) => el - p2[ind]).reduce((tot, x) => x/tot, 1));

const hasSolution = (arr, r) => angl => [r*Math.cos(angl) + arr[0], r*Math.sin(angl) + arr[1]].map(el => el.toFixed(4));

const diam = (p1, p2) => p1.map((el, ind) => el + (p2[ind] - el)/2);

function getCircles(...args) {
    const [point1, point2, r] = args;
    const s = hasSolution(point1, r);
    const mr = maxRValid(point1, point2);

    if (JSON.stringify(point1) === JSON.stringify(point2) && r === 0) return "Radius Zero";
    let ans = [];
    
    switch (Math.sign(r - mr)) {
        case 0: 
            ans = diam(point1, point2);
            break;

        case 1:
            if (!mr) return "Coincident point. Infinite solutions";
            else {
                let alph = angle(point1, point2);
                let alph2 = Math.acos(mr/r);
                ans = [1, -1].map(el => s(alph + alph2*el))
                
            }
            break;
        
        case -1:
            return "No intersection. Points further apart than circle diameter";
    }

    return ans;
}
 

// console.log(getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0));
// console.log(getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0));