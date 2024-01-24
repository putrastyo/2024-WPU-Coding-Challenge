// > CODEWARS 2024 (gabut)
// > Challenge Title  : String ends with?
// > Challenge URL    : https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

const solution = (str, ending) => {
  if(!ending.length){
    return true;
  }
  let result;
  let start = str.length - ending.length; 

  for(let i = 0; i<ending.length;i++){
    if(ending[i] === str[start]){
      result = true;
    } else {
      return false;
    }
    start++;
  }
  return result;
}
function solution2(str, ending){
  return str.endsWith(ending);
}

console.log(solution('abcd', 'cd'));
console.log(solution2('sumo', 'omo'));