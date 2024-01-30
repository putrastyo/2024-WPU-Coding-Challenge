function countBy(x, n) {
  let z = [];
  let limit = x * n;

  for (let i = x; i <= limit; i += x) {
    z.push(i);
  }

  return z;
}

module.exports = countBy;
