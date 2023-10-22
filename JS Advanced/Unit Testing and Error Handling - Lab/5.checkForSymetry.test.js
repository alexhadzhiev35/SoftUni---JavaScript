const { isSymmetric } = require("./5.checkForSymetry");
const expect = require("chai").expect;

describe("isSymmetric working properly", () => {
  it("should return false if the parameter is not an array", () => {
    expect(isSymmetric("dsadsadsa")).to.be.equal(false);
    expect(isSymmetric(12)).to.be.equal(false);
    expect(isSymmetric({ name: "Toni" })).to.be.equal(false);
  });

  it("should return true if symmetric strings", () => {
    expect(isSymmetric(["1", "2", "2", "1"])).to.be.equal(true);
  });

  it("should return false if the array is not symmetric strings", () => {
    expect(isSymmetric(["1", "2", "3", "4"])).to.be.equal(false);
  });

  it("should return true if symmetric strings", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.equal(true);
  });

  it("should return false if the array is not symmetric strings", () => {
    expect(isSymmetric([1, 2, 3, 4])).to.be.equal(false);
  });

  it("should return true if the array has no elements", () => {
    expect(isSymmetric([])).to.be.equal(true);
  });

  it("should return true if the array.length is odd number", () => {
    expect(isSymmetric(["1", "2", "3", "2", "1"])).to.be.equal(true);
  });

  it("should return false if nothing is passed", () => {
    expect(isSymmetric()).to.be.equal(false);
  });
});
