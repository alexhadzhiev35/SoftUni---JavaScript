function solution(num) {
  return function add(n) {
    return n + num;
  };
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
