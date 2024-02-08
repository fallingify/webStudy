let set = new Set();

let pr1 = { name: "홍길동" };
let pr2 = { name: "짱구" };
let pr3 = { name: "김영선" };

//set 추가
set.add(pr1);
set.add(pr2);
set.add(pr3);
set.add(pr1);

console.log(set);

for (let user of set) {
    console.log(user.name);
}

let ar1 = ["오렌지", "사과", "배", "참외", "귤", "사과", "사과"];
console.log(ar1);

let set1 = new Set(["오렌지", "사과", "배", "참외", "귤", "사과", "사과"]);
console.log(set1);
set1.forEach((value, val, set) => {
    // console.log(value);
    console.log(value, val, set);
});
