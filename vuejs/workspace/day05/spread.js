//spread operator전개연산자 : ...이름

let obj1 = {name: "lee", age: 20};
let obj2 = obj1; //주소만 복사, 얕은 복사 
let obj3 = {...obj1}; //객체내부의 값만 복사, 깊은 복사, 전개 연산자를 사용해 객체obj1을 복사하여 obj3에 전달, obj3와 obj1은 다른객체
let obj4 = {...obj1, email: "abc@g.mail.com"}; //전개연산자를 사용하여 새로운 속성email을 추가한 객체 obj4를 생성

obj2.age = 10; //차이 비교해보기

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);

let ar1 = [10, 20, 30]
let ar2 = ['hello', ...ar1, 'javascript'];
console.log(ar1);
console.log(ar2);