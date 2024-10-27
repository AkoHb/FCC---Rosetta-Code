const A = arr => arr.reduce((tot, x) => tot + x, 0)/arr.length;


const G = arr => (arr.reduce((tot, x) => tot * x, 1))**(1/arr.length);

const H = arr => arr.length / arr.reduce((tot, x) => tot + 1/x, 0);

function pythagoreanMeans(rangeArr) {
    let res = {
        values : {
            Arithmetic: A(rangeArr),
            Geometric: G(rangeArr),
            Harmonic: H(rangeArr)
        },
        test: 'is A >= G >= H ? yes'
    }
    return res
}

let testArr = [1,2,3,4,5,6,7,8,9,10];
console.log(pythagoreanMeans(testArr))

