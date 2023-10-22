const { isOddOrEven } = require("./2.isOddOrEven");
const { assert } = require("chai");

describe("test with incorrect parameter", () => {
  it("test with object", () => {
    assert.equal(
      isOddOrEven({ prop: "Pesho" }),
      undefined,
      "return value must be undefined"
    );
  });

  it("test with array", () => {
    assert.equal(
      isOddOrEven(["Pesho"]),
      undefined,
      "return value must be undefined"
    );
  });

  it("test with number", () => {
    assert.equal(isOddOrEven(10), undefined, "return value must be undefined");
  });
});

describe("test with correct data", () => {
  it("test with even word", () => {
    assert.equal(isOddOrEven("toto"), "even", "return value should be even");
  });

  it("test with odd word", () => {
    assert.equal(isOddOrEven("toton"), "odd", "return value should be odd");
  });

  it("test with 0 char", () => {
    assert.equal(isOddOrEven(""), "even", "return value should be even");
  });
});
