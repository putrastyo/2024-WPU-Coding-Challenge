// * Solution 1
function growWithMap(x){
  let result = 1;
  x.map(item => {
    result = result*item;
  })
  return result;
}

// * Solution 2
const growWithReduce = (x) => x.reduce((acc,curr) => acc * curr, 1);

module.exports = {
  growWithMap,
  growWithReduce
}