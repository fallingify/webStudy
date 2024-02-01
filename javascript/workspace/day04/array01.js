let numbers = [10, 5, 3, 2, 7, 9];

// console.log(numbers);
// console.log(typeof numbers); //원시타입외 모든 것은 객체타입임

// //push() : 가장 마지막에 값 추가
// numbers.push(100); 
// console.log(numbers);
// console.log(numbers[0], typeof numbers[0]);

// for(let i in numbers){
//     console.log(numbers[i]);
// }

// //join()
// console.log(typeof [1, 2, 3, 4, 5].join(", "));
// console.log([1, 2, 3, 4, 5].join(", "));


// console.log(["java", "dbms", 3, 2024.02, true].join("/"));
// console.log(["java", "dbms", 3, 2024.02, true]);

// //인덱싱
// console.log(numbers[3]);


// //slice(시작: 끝)
// console.log(numbers);
// console.log(numbers.slice(1,4)); //1, 2, 3

// //pop() : 마지막 요소삭제
// console.log(numbers.pop());
// console.log(numbers);

// //shift() : 첫번째 요소삭제
// console.log(numbers.shift());
// console.log(numbers);

//splice(인덱스, 개수) : 삭제
// console.log(numbers.splice(1, 4)); 
// console.log(numbers);


//splice(인덱스, 개수, ...args) : 교체
// numbers.splice(1, 1, 0); 
// console.log(numbers);

//forEach(콜백함수) : 반복문
// numbers.forEach((num, i, numbers) => {
//     console.log(num);
//     console.log(i);
//     console.log(numbers);
// });


// numbers.forEach((num) => {
//     console.log(num);
// });
//numbers.forEach(console.log);

//indexOf(값) : 값을 Array에서 찾은 뒤 인덱스 번호를 반환
//없으면 -1
// console.log(numbers.indexOf(10));
// console.log(numbers.indexOf(153));

//map(callback) : 기존 값을 원하는 값으로 변경하여 반환
console.log(numbers.map(function(num){return 10;}));

const number1 = [1,2,3,4,5];

//각 요소를 제곱하여 새로운 배열을 생성
const squaredNum = number1.map(function(num){ return num*num; });
console.log(squaredNum);


//squaredNum에 있는 값을 전부 2로 나눈 값으로 변경
squaredNum.map((num) => parseInt(num/2));
console.log(squaredNum);
console.log(squaredNum.map((num) => num/2));
console.log(squaredNum.map((num) => parseInt(num/2)));


//filter(callback) : callback의 리턴값이 true일 때만 추출
console.log(number1.filter(function(num){
    return num % 2 == 0;
}))

const person = {
    name : "ljh",
    age : 20, 
    isAdult : function(){
        return this.age >= 20; 
    }
};
const people = [
    {name : "짱구", age : 10},
    {name : "맹구", age : 20},
    {name : "당구", age : 30},
];
console.log(people);
console.log(typeof people);

const adult = people.filter(
    function (person) {
    return this.isAdult.call(person); 
}, person
);

console.log(adult);


const number2 = new Array(5);//비어있음
console.log(number2);


//fill() : 매개인자로 요소의 값을 채움
//fill(값, 시작인덱스 , 종료인덱스) : 시작인덱스 ~ 값으로 채우기
const number3 = number2.fill(10);
console.log(number3);

const number5 = number3.fill(2, 1, 3);
console.log(number5);