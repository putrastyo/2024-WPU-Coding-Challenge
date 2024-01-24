// > CODEWARS 2024 (1/366)
// > Challenge Title  : Reversed Sequence
// > Challenge URL    : https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
  const result = [];
  while(n > 0){
    result.push(n);
    n--;
  }
  return result;
};

module.exports = {
  reverseSeq
}