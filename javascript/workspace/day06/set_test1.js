let map = new Map();
console.log(map);

// map.set("1", "str1"); //key 문자형키
// map.set(1, "num1"); //key숫자형 키
// map.set(true, "bool1"); //불린형 키

// console.log(map);

// //객체는 키를 문자형으로 변환하지만
// //맵은 키의 타입을 변환하지않고 그대로 사용
// console.log(map.get(1));
// console.log(map.get("1"));
//console.log(map["1"]); //일반객체처럼 취급하게 되므로 set, get을 사용해라

let pr1 = { name: "김" };
console.log(pr1);

//학생의 대면수업출석횟수를 계산
let stuCount = new Map();
stuCount.set(pr1, 10);
console.log(stuCount.get(pr1));

//java map
//HashMap<String, Integer> m = new HashMap<>();
//m.put();

console.log(pr1);
let pr = {}; //객체
pr[pr1] = 10;
console.log(pr[pr1]);
console.log(pr); //{ '[object Object]': 10 } 모든 키를 문자형으로 변환

//객체와 맵은 다름

//객체 vs 맵 차이

//체이닝 => mdn 튜토리얼로
