const { PaymentPackage } = require("./12.paymentPackage");
const { assert } = require("chai");

describe("create instance of PaymentPackage", () => {
  let paymentPackage;

  beforeEach(() => {
    paymentPackage = new PaymentPackage("Todor", 10);
  });

  it("name should be correct", () => {
    assert.equal(
      paymentPackage._name,
      "Todor",
      "name has correct set to Todor"
    );
  });

  it("value should be correct", () => {
    assert.equal(paymentPackage._value, 10, "value has correct set to 10");
  });

  it("VAT should be correct", () => {
    assert.equal(paymentPackage._VAT, 20, "VAT has correct set to 20");
  });

  it("active should be correct", () => {
    assert.equal(
      paymentPackage._active,
      true,
      "active has correct set to true"
    );
  });
});

describe("test accessors", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Pesho", 30);
  });

  it("instance correct get and set name", () => {
    assert.equal(paymentPackage.name, "Pesho");

    paymentPackage.name = "Todor";
    assert.equal(paymentPackage.name, "Todor");
  });

  it("instance correct get and set value", () => {
    assert.equal(paymentPackage.value, 30);

    paymentPackage.value = 40;
    assert.equal(paymentPackage.value, 40);

    paymentPackage.value = 0;
    assert.equal(paymentPackage.value, 0);
  });

  it("instance correct get and set VAT", () => {
    assert.equal(paymentPackage.VAT, 20);

    paymentPackage.VAT = 30;
    assert.equal(paymentPackage.VAT, 30);

    paymentPackage.VAT = 0;
    assert.equal(paymentPackage.VAT, 0);
  });

  it("instance correct get and set active", () => {
    assert.equal(paymentPackage.active, true);

    paymentPackage.active = false;
    assert.equal(paymentPackage.active, false);
  });
});

describe("test set incorrect value", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Todor", 10);
  });

  it("incorrect name", () => {
    assert.throws(() => new PaymentPackage("", 10));
    assert.throws(() => new PaymentPackage(10, 10));
  });

  it("incorrect value", () => {
    assert.throws(() => new PaymentPackage("Todor", "10"));
    assert.throws(() => new PaymentPackage("Todor", -10));
  });

  it("incorrect vat", () => {
    assert.throws(() => (paymentPackage.VAT = "Gosho"));
    assert.throws(() => (paymentPackage.VAT = -10));
  });

  it("incorrect active", () => {
    assert.throws(() => (paymentPackage.active = "Gosho"));
    assert.throws(() => (paymentPackage.active = -10));
  });
});

describe("toString", () => {
  let paymentPackage;
  beforeEach(() => {
    paymentPackage = new PaymentPackage("Pesho", 30);
  });

  it("test inactive", () => {
    paymentPackage.active = false;
    const res = [
      `Package: Pesho (inactive)`,
      `- Value (excl. VAT): 30`,
      `- Value (VAT 20%): 36`,
    ].join("\n");

    assert.equal(paymentPackage.toString(), res);
  });

  it("test active", () => {
    const res = [
      `Package: Pesho`,
      `- Value (excl. VAT): 30`,
      `- Value (VAT 20%): 36`,
    ].join("\n");

    assert.equal(paymentPackage.toString(), res);
  });
});
