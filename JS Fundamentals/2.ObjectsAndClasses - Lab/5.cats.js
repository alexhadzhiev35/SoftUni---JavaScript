function arstr(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let entry of arr) {
    let [name, age] = entry.split(" ");
    let cat = new Cat(name, age);
    cat.meow();
  }
}

arstr(["Candy 1", "Poppy 3", "Nyx 2"]);
