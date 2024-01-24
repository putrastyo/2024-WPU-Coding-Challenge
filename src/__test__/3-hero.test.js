const {hero} = require('../3-hero.js');

test('', () => {
  expect(hero(10, 5)).toBeTruthy()
  expect(hero(7, 4)).toBeFalsy()
})