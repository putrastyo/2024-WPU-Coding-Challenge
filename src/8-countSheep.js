const countSheep = (num) => {
  let text = "";

  for (let i = 1; i <= num; i++) {
    text += `${i} sheep...`;
  }

  return text;
};

module.exports = countSheep;
