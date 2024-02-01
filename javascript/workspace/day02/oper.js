// == : 값만 비교, 문자열일 경우 자동으로 파싱 "1" == 1 == true
// === : 값과 타입을 모두 비교, "1" === 1 === false
// data1 = "1";
// data2 = 1;

// console.log(data1 == data2);
// console.log(data1 === data2); 

// " ", null, 0, undefined : false로 취급되는 값
// let data; 
// if(! data) {
//     console.log("true"); 
// } else {
//     console.log("false");
// }

// let data;
// data = data || 1; 
// console.log(1); 
// console.log(data); 

//&& : 선행조건식이 false이면 뒤로 넘어가지 않고 
//선행조건식이 true이면 뒤에 있는 값으로 대체된다.
// let check = false;
// console.log(check && 10); 

// check = true;
// console.log(check && 10); 

//삼항연산자
//조건식 ? 참 : 거짓; 
let check = false;
console.log(check? 10: 20);

//비교가 불가능한 undefined : undefined 의 값은 다른 값과 비교해서는 안된다
console.log(undefined > 0); 
console.log(undefined < 0); 
console.log(undefined == 0); 
console.log(undefined === 0); 
console.log(undefined == null); //==비교시 true, ===비교시 false로 나온다

console.log("apple" > "pineapple");
console.log("1" === 1);
