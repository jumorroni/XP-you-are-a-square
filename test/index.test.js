const { SquareOfSquares } = require("../src/index.js");

test("should return true when there is an integer number", () => {
    expect(SquareOfSquares(0)).toBe(true);
});
test("should return true when n is 0 ", () => {
    expect(SquareOfSquares(0)).toBe(true);
});

test("should return true when n is 0, 4 and 25", () => {
    expect(SquareOfSquares(0, 4, 25)).toBe(true);
});

test("should return true when n is -1, 3 and 26", () => {
    expect(SquareOfSquares(-1, 3, 26)).toBe(true);
});