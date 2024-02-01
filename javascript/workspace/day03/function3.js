// let sayHello = function(){
//     console.log("안녕하세요");
// }

// let sayHello1 = function(){
//     return "안녕하세요";
// }


// console.log(typeof sayHello);
// console.log(sayHello);

// function add(num1, num2){
//     return num1 + num2; 
// }


// function add1(num1, num2){
//     console.log(num1 + num2); 
// }

// console.log(typeof add1());
// console.log(sayHello);
// console.log(sayHello1);

// //변수를 함수처럼 호출하면 함수안의 내용을 출력
// sayHello(); 

// //ES6부터, 익명함수일 경우 function 키워드를 생략한 뒤 => 로 함수를 선언할 수 있다

// data = 10; 
// console.log(data); 

// data = function(){
//     console.log("함수실행"); 
// };
// data();

// data = () => {
//     console.log("function안쓸때 함수 실행")
// }; 
// data();

function add2(num1, num2, a){
    a(num1 + num2);
}
print = (result) => console.log(result);
add2(1, 2, print);


add2(10, 20, result => console.log(result)); 

function add3(num1, num2){
    return ()=> {
        console.log(num1 + num2);
    };
}
print = add3(100, 200); 
print();

//중첩된 함수
//비동기 작업처리나 함수형 프로그래밍에서 많이 사용하는 방식
function add4(num1, num2){  //add4정의
    return function(){//익명함수를 반환하는 익명함수를 반환
        return function(){//익명함수를 반환
            console.log(num1 * num2);
        }
    }
}
add4(100, 200)()(); //중첩된것만큼()()해야함
