
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// let [num1, num2, num3, num4] = arr;
// console.log(num1, num2, num3);
// 순서대로 들어감

let p1 = {name: "lee", age: 20, sex: "M"};
let {name: n, age: a, sex: g} = p1;
console.log(n, a, g); //변수명 생락이 가능함. 편해짐
console.log(p1.name); //이렇게 안해도 됨. 위처럼 해도 가능