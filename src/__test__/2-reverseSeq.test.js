const {reverseSeq} = require('../2-reverseSeq.js');

test('should return array with reverse loop', () => {
  expect(reverseSeq(5)).toEqual([5,4,3,2,1]);
})