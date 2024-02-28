//콜백함수의 중첩과 코드의 단계적실행을 promise로 해결

//비동기 함수 3개 생성
function promFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1번쨰 비동기함수 실행");
            resolve();
        }, 2000);
    });
};

function promFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2번쨰 비동기함수 실행");
            resolve();
        }, 1500);
    });
};

function promFunc3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3번쨰 비동기함수 실행");
            resolve();
        }, 1000);
    });
};

//비동기 함수 호출
promFunc1()
.then(() => promFunc2())
.then(() => promFunc3())
.then(() => {console.log("작업완료")})
.catch((error) => {
    console.error("오류발생", error);
})