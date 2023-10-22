(function solve() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
  Array.prototype.skip = function (n) {
    let result = [];
    for (let i = n; i < this.length; i++) {
      result.push(this[i]);
    }

    return result;
  };
  Array.prototype.take = function (n) {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(this[i]);
    }

    return result;
  };
  Array.prototype.sum = function () {
    let sum = 0;

    this.forEach((el) => (sum += el));

    return sum;
  };
  Array.prototype.average = function () {
    return this.sum() / this.length;
  };
})();

let arr = [1, 2, 3, 4, 5];

console.log(arr.last());
console.log(arr.skip(2));
console.log(arr.take(2));
console.log(arr.sum());
console.log(arr.average());
