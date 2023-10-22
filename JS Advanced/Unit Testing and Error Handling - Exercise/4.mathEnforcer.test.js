const { mathEnforcer } = require("./4.mathEnforcer");
const { assert } = require("chai");

describe("addFive", () => {
  describe("incorrect value", () => {
    it("test with string", () => {
      assert.equal(
        mathEnforcer.addFive("pesho"),
        undefined,
        "return value must be undefined"
      );
    });
    it("test with object", () => {
      assert.equal(
        mathEnforcer.addFive({ name: "pesho" }),
        undefined,
        "return value must be undefined"
      );
    });
    it("test with array", () => {
      assert.equal(
        mathEnforcer.addFive([1, 2, 3, 4]),
        undefined,
        "return value must be undefined"
      );
    });
  });

  describe("correct value", () => {
    it("test with number", () => {
      assert.equal(mathEnforcer.addFive(5), 10, "return value must be 10");
      assert.equal(mathEnforcer.addFive(0), 5, "return value must be 5");
      assert.equal(mathEnforcer.addFive(2), 7, "return value must be 7");
    });

    it("test with negative number", () => {
      assert.equal(mathEnforcer.addFive(-5), 0, "return value must be 0");
    });

    it("test with float number", () => {
      assert.equal(
        mathEnforcer.addFive(5.2),
        10.2,
        "return value must be 10.2"
      );
    });
  });
});

describe("subtractTen", () => {
  describe("incorrect value", () => {
    it("test with string", () => {
      assert.equal(
        mathEnforcer.subtractTen("pesho"),
        undefined,
        "return value must be undefined"
      );
    });
    it("test with object", () => {
      assert.equal(
        mathEnforcer.subtractTen({ name: "pesho" }),
        undefined,
        "return value must be undefined"
      );
    });
    it("test with array", () => {
      assert.equal(
        mathEnforcer.subtractTen([1, 2, 3, 4]),
        undefined,
        "return value must be undefined"
      );
    });
  });

  describe("correct value", () => {
    it("test with number", () => {
      assert.equal(mathEnforcer.subtractTen(5), -5, "return value must be -5");
      assert.equal(
        mathEnforcer.subtractTen(0),
        -10,
        "return value must be -10"
      );
      assert.equal(mathEnforcer.subtractTen(12), 2, "return value must be 2");
    });

    it("test with negative number", () => {
      assert.equal(
        mathEnforcer.subtractTen(-5),
        -15,
        "return value must be -15"
      );
    });

    it("test with float number", () => {
      assert.equal(
        mathEnforcer.subtractTen(5.2),
        -4.8,
        "return value must be 4.8"
      );
    });
  });
});

describe("sum", () => {
  describe("incorrect value", () => {
    it("test with one string", () => {
      assert.equal(
        mathEnforcer.sum("pesho", 1),
        undefined,
        "return value must be undefined"
      );
      assert.equal(
        mathEnforcer.sum(1, "pesho"),
        undefined,
        "return value must be undefined"
      );
    });
    it("test with one object", () => {
      assert.equal(
        mathEnforcer.sum({ name: "pesho" }, 1),
        undefined,
        "return value must be undefined"
      );
      assert.equal(
        mathEnforcer.sum(1, { name: "pesho" }),
        undefined,
        "return value must be undefined"
      );
    });
    it("test with one array", () => {
      assert.equal(
        mathEnforcer.sum([1, 2, 3, 4], 1),
        undefined,
        "return value must be undefined"
      );
      assert.equal(
        mathEnforcer.sum(1, [1, 2, 3, 4]),
        undefined,
        "return value must be undefined"
      );
    });

    it("test with two arrays", () => {
      assert.equal(
        mathEnforcer.sum([1, 2, 3, 4], [1, 2, 3, 4]),
        undefined,
        "return value must be undefined"
      );
    });

    it("test with two strings", () => {
      assert.equal(
        mathEnforcer.sum("pesho", "gosho"),
        undefined,
        "return value must be undefined"
      );
    });

    it("test with two objects", () => {
      assert.equal(
        mathEnforcer.sum({ name: "Alex" }, { age: 21 }),
        undefined,
        "return value must be undefined"
      );
    });
  });

  describe("correct value", () => {
    it("test with numbers", () => {
      assert.equal(mathEnforcer.sum(5, 2), 7, "return value must be 7");
      assert.equal(mathEnforcer.sum(0, 10), 10, "return value must be 10");
      assert.equal(mathEnforcer.sum(12, 8), 20, "return value must be 20");
    });

    it("test with + - number", () => {
      assert.equal(mathEnforcer.sum(-5, 20), 15, "return value must be 15");
      assert.equal(mathEnforcer.sum(5, -30), -25, "return value must be -25");
    });

    it("test with 2 - numbers", () => {
      assert.equal(mathEnforcer.sum(-20, -30), -50, "return value must be -50");
    });

    it("test with float number", () => {
      assert.equal(
        mathEnforcer.sum(5.2, 5.6),
        10.8,
        "return value must be 10.8"
      );
    });
  });
});
