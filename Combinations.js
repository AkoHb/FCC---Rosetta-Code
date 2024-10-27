const perm = (arr, l) => {
    let res = [];
    if (l === 0) return res;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        res.push([...arr.slice(0, i)].concat([...arr.slice(i+1, j)]).concat([...arr.slice(j+1)]))
      }
  
    }
    return res;
}
  
function combinations(m, n) {
      if (m === 0) return [[]];
      let arr = Array.from({length: n}, (_, i) => i);
      return perm(arr, m).sort()
}
  
console.log(combinations(3, 5))