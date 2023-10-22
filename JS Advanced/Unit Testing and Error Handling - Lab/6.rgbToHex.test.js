const { rgbToHexColor } = require("./6.rgbToHex");
const expect = require("chai").expect;

describe("rgbToHexColor", () => {
  it("should return white color", () => {
    expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
  });

  it("should return black color", () => {
    expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
  });

  it("should return dark purple", () => {
    expect(rgbToHexColor(64, 58, 137)).to.be.equal("#403A89");
  });

  it("should return undefined when we don't pass all the arguments", () => {
    expect(rgbToHexColor(255)).to.be.equal(undefined);
  });

  it("should return undefined for values out of range", () => {
    expect(rgbToHexColor(-230, 300, 200)).to.be.equal(undefined);
    expect(rgbToHexColor(230, -200, 200)).to.be.equal(undefined);
    expect(rgbToHexColor(230, 300, -200)).to.be.equal(undefined);
  });

  it("should return values different than integer", () => {
    expect(rgbToHexColor(25, 250, 26.2)).to.be.equal(undefined);
    expect(rgbToHexColor("greed", "purple", "red")).to.be.equal(undefined);
    expect(rgbToHexColor()).to.be.equal(undefined);
    expect(rgbToHexColor({ name: "toni" })).to.be.equal(undefined);
    expect(rgbToHexColor([255, 255, 255])).to.be.equal(undefined);
  });
});
