// > CODEWARS 2024 (gabut)
// > Challenge Title  : Split String
// > Challenge URL    : https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

const solution = (str) => {
  const result = [];
  for(let i=0;i<str.length;i+=2){
    let a = str[i];
    let b = str[i+1];
    let newItem = a + (b || '_');
    result.push(newItem);
  } 
  return result;
}

console.log(solution('abcde'))
console.log(solution('abcdef'))