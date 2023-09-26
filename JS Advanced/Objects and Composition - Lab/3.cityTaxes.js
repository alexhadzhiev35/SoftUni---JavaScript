function cityTaxes(name, population, treasury) {
  return {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes: function () {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth: function (percentage) {
      this.population += Math.floor((this.population * percentage) / 100);
    },
    applyRecession: function (percentage) {
      this.treasury -= Math.floor((this.treasury * percentage) / 100);
    },
  };
}
cityTaxes();
