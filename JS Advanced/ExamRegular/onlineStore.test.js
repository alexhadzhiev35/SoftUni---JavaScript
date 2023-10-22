const { onlineStore } = require("./onlineStore");
const { assert } = require("chai");

describe("Online Store", () => {
  describe("isProductAvailable functionallity", () => {
    it("wrong product data", () => {
      assert.throws(() => {
        onlineStore.isProductAvailable(1, 2);
      }, "Invalid input.");
      assert.throws(() => {
        onlineStore.isProductAvailable([2, 2, 3], 2);
      }, "Invalid input.");
      assert.throws(() => {
        onlineStore.isProductAvailable({ name: 1, dsa: 21 }, 2);
      }, "Invalid input.");
      assert.throws(() => {
        onlineStore.isProductAvailable(0, 2);
      }, "Invalid input.");
    });

    it("wrong stockQuantityData", () => {
      assert.throws(() => {
        onlineStore.isProductAvailable("pro", "k");
      }, "Invalid input.");
      assert.throws(() => {
        onlineStore.isProductAvailable("pro", { dsa: 2, ds2: 2 });
      }, "Invalid input.");
      assert.throws(() => {
        onlineStore.isProductAvailable("pro", [2, 1, 4, 5]);
      }, "Invalid input.");
      assert.throws(() => {
        onlineStore.isProductAvailable(21, [2, 1, 4, 5]);
      }, "Invalid input.");
    });
    it("correct stockQuantityData", () => {
      assert.equal(
        onlineStore.isProductAvailable("pro", 0),
        `Sorry, pro is currently out of stock.`
      );
      assert.equal(
        onlineStore.isProductAvailable("pro", -19),
        `Sorry, pro is currently out of stock.`
      );
      assert.equal(
        onlineStore.isProductAvailable("pro", 1),
        `Great! pro is available for purchase.`
      );
      assert.equal(
        onlineStore.isProductAvailable("pro", 122),
        `Great! pro is available for purchase.`
      );
    });
  });

  describe("canAffordProduct functionallity", () => {
    it("wrong productPrice", () => {
      assert.throws(() => {
        onlineStore.canAffordProduct("2", 200);
      }, "Invalid input.");

      assert.throws(() => {
        onlineStore.canAffordProduct({ ndsa: 2, dsa: 2 }, 200);
      }, "Invalid input.");

      assert.throws(() => {
        onlineStore.canAffordProduct([2, 2, 4, 6, 7], 200);
      }, "Invalid input.");
    });

    it("wrong balance", () => {
      assert.throws(() => {
        onlineStore.canAffordProduct(2, "200");
      }, "Invalid input.");

      assert.throws(() => {
        onlineStore.canAffordProduct(2, { P: 200 });
      }, "Invalid input.");

      assert.throws(() => {
        onlineStore.canAffordProduct(2, [200]);
      }, "Invalid input.");
    });

    it("correct data", () => {
      assert.equal(
        onlineStore.canAffordProduct(20, 10),
        "You don't have sufficient funds to buy this product."
      );
      assert.equal(
        onlineStore.canAffordProduct(20, 0),
        "You don't have sufficient funds to buy this product."
      );
      assert.equal(
        onlineStore.canAffordProduct(20, 200),
        `Product purchased. Your remaining balance is $180.`
      );
      assert.equal(
        onlineStore.canAffordProduct(200, 200),
        `Product purchased. Your remaining balance is $0.`
      );
    });
  });

  describe("getRecommendedProducts functionallity", () => {
    it("wrong productList", () => {
      assert.throws(() => {
        onlineStore.getRecommendedProducts("2", "cat");
      }, "Invalid input.");

      assert.throws(() => {
        onlineStore.getRecommendedProducts(2, "cat");
      }, "Invalid input.");

      assert.throws(() => {
        onlineStore.getRecommendedProducts({ koi: "2" }, "cat");
      }, "Invalid input.");
    });

    it("wrong category", () => {
      assert.throws(() => {
        onlineStore.getRecommendedProducts([], []);
      }, "Invalid input.");

      assert.throws(() => {
        onlineStore.getRecommendedProducts([], 2);
      }, "Invalid input.");

      assert.throws(() => {
        onlineStore.getRecommendedProducts([], { kdas: 2, dsa: 2 });
      }, "Invalid input.");
    });

    it("correct input", () => {
      assert.equal(
        onlineStore.getRecommendedProducts(
          [{ name: "Camera", category: "Photography" }],
          "Photography"
        ),
        `Recommended products in the Photography category: Camera`
      );

      assert.equal(
        onlineStore.getRecommendedProducts(
          [{ name: "Camera", category: "Photography" }],
          "Snimka"
        ),
        `Sorry, we currently have no recommended products in the Snimka category.`
      );
    });
  });
});
