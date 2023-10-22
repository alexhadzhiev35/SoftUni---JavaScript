class List {
  constructor() {
    this.collection = [];
    this.size = 0;
  }

  add(element) {
    this.collection.push(element);
    this.collection.sort((a, b) => a - b);
    this.size++;
  }

  remove(index) {
    if (index < 0 || index >= this.collection.length) {
      throw new Error("Invalid index");
    }
    this.size--;

    return this.collection.splice(index, 1);
  }

  get(index) {
    if (index < 0 || index >= this.collection.length) {
      throw new Error("Invalid index");
    }
    return this.collection[index];
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
