//콜백함수
//두 정수의 덧셈결과를 출력
function add(number1, number2, cb){
    if(cb){
        cb(number1 + number2);
    }
    return number1 + number2;
};

const print = (res) => {
    console.log(res);
};

const result = add(1, 5, print);
//print함수가 add함수에 callback으로 전달되엇으므로
//add함수내에서 결과값이 print함수로 전달되고
//콘솔에 결과가 출력됨


//두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력하기
function multiply(num1, num2, cb){
    if(cb){
        cb(num1 * num2);
    }return num1 * num2;
};

multiply(4, 8, (result) => {
    console.log(result * 2);
});

