// 객체를 맵으로 바꾸rl

let map = new Map([
    ["1", "str1"],
    [1, "num1"],
    [true, "bool1"],
]);

console.log(map.get("1"));

let stu = { name: "김영선", age: 20, subject: "javascript" };
console.log(stu);

//[[name: "김영선"], [age: 20], [subject: "javascript"]];

let map1 = new Map(Object.entries(stu));

console.log(map1);

let ob = Object.fromEntries(map1.entries());
console.log(ob);
