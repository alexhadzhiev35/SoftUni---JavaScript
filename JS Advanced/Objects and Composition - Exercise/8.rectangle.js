function rectangle(width, height, color) {
  let firstLetterToUpper = color.slice(0, 1).toUpperCase();
  color = firstLetterToUpper + color.slice(1);

  return {
    width,
    height,
    color,
    calcArea: function () {
      let area = this.width * this.height;
      return area;
    },
  };
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
