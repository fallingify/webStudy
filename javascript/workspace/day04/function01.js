function number(num){
    console.log("number함수 실행");
    console.log(`${num + 10}`);
    return num + 10;
}

let res = number(10); 
console.log(res);

//자바스크립트는 변수에 함수를 저장할 수 있음
//사용시 함수명을 생략할 수 있다
//함수명을 작성해도 사용시 변수이름으로 대신해 사용한다
let res1 = function num(num) {
    return num * 10;
};

console.log(res1(10));
//함수를 매개변수로 넘겨줄 수 있다
function resultNum(num) {
    for(let i=0; i<num; i++) {
        console.log(i);
    }
};
resultNum(10);

//콜백함수 : 함수의 매개변수로 전달되는 함수를 가리킴
let printAll = function(n){
    console.log(n);
};

let printAdd = function(n){
    if(n % 2 ==0){
        console.log(n+10);
    }
};

function resNum(num, f){
    for(let i=0; i<num; i++) {
        f(i);
    }
}
resNum(10, printAdd);


resNum(10, function(n){
    console.log(n *2);
});

