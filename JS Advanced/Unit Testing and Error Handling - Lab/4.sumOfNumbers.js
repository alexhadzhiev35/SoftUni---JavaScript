const expect = require("chai").expect;

function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += Number(num);
  }
  return sum;
}

describe("sum of array elements", function () {
  it("should return sum", function () {
    expect(sum([2, 3, 4])).to.be.equal(9);
  });
});
