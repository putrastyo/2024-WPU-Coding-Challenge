const {smash} = require('../4-smash.js');

test('should make sentence from array', () => {
  expect(smash(['Hello', 'World'])).toBe('Hello World');
  expect(smash([])).toBe('');
})