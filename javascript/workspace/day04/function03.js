let x = 10;
function f(){
    let x = 20;
    console.log(x);
}
f();

//전역변수가 global이 가지고 있다
//전역에 접근하기 위해 global로 만들어야 한다
//브라우저에서는 전역에 window node일 때 global로
//자동으로바꿔주는 전역 예약어가 있다
//globalThis

global.x = 10;
globalThis.x = 10;
function f() {
    let x= 20;
    console.log(global.x);
    console.log(globalThis.x);
}
f();