const { lookupChar } = require("./3.charLookup");
const { assert } = require("chai");

describe("lookupChar function", () => {
  describe("test with incorrect data", () => {
    it("test first parameter is NOT string", () => {
      assert.equal(
        lookupChar(2212, 3),
        undefined,
        "return value must be undefined"
      );
      assert.equal(
        lookupChar(["2", "4", "5", "5"], 3),
        undefined,
        "return value must be undefined"
      );
      assert.equal(
        lookupChar({ name: "alex" }, 3),
        undefined,
        "return value must be undefined"
      );
    });

    it("test second parameter is NOT number", () => {
      assert.equal(
        lookupChar("alex", { name: "alex" }),
        undefined,
        "return value must be undefined"
      );
      assert.equal(
        lookupChar("alex", [2, 2, 3, 4]),
        undefined,
        "return value must be undefined"
      );
      assert.equal(
        lookupChar("alex", "hadzhiev"),
        undefined,
        "return value must be undefined"
      );
    });

    it("test second parameter is NOT integer", () => {
      assert.equal(
        lookupChar("alex", 2.2),
        undefined,
        "return value must be undefined"
      );
    });

    it("test both parameters are NOT valid", () => {
      assert.equal(
        lookupChar(2, "alex"),
        undefined,
        "return value must be undefined"
      );
      assert.equal(
        lookupChar([2, 2, 2, 2], { name: "alex" }),
        undefined,
        "return value must be undefined"
      );
    });
    it("test second parameter is NOT valid index", () => {
      assert.equal(
        lookupChar("alex", 4),
        "Incorrect index",
        "return value must be undefined"
      );

      assert.equal(
        lookupChar("alex", -1),
        "Incorrect index",
        "return value must be undefined"
      );
    });
  });

  describe("test with correct data", () => {
    it("test with correct data", () => {
      assert.equal(lookupChar("alex", 1), "l", "return value must be `l`");
      assert.equal(lookupChar("KOKolea", 2), "K", "return value must be `K`");
      assert.equal(lookupChar("softuni", 0), "s", "return value must be `s`");
    });
  });
});
