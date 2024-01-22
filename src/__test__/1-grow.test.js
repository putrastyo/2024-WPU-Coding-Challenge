const {growWithMap, growWithReduce} = require('../1-grow.js');

test('should times each data integer in array', () => {
  const growData = [1, 3, 5];
  expect(growWithMap(growData)).toBe(15);
  expect(growWithReduce(growData)).toBe(15);
})