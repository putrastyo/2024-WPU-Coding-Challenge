const DNAtoRNA = require("../6-dnaToRna.js");

test("should change T to U", () => {
  expect(DNAtoRNA("GCAT")).toBe("GCAU");
  expect(DNAtoRNA("TTT")).toBe("UUU");
});
