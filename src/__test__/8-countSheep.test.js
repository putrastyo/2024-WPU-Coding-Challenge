const countSheep = require("../8-countSheep.js");

test("should loop sheep", () => {
  expect(countSheep(3)).toBe("1 sheep...2 sheep...3 sheep...");
});
