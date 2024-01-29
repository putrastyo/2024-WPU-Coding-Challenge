const zeroFuel = require('../5-zeroFuel.js');

test('should return true if true', () => {
  expect(zeroFuel(50,25,2)).toBeTruthy()
  expect(zeroFuel(100,50,1)).toBeFalsy()
})