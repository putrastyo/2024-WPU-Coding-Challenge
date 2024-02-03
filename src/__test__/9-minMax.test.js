const { min, max } = require("../9-minMax.js");

test("should return min and max value of array", () => {
  expect(min([-52, 56, 30, 29, -54, 0, -110])).toBe(-110);
  expect(max([4, 6, 2, 1, 9, 63, -134, 566])).toBe(566);
});
