//콜백함수의 중첩과 코드의 단계적실행을 promise로 해결

//비동기 함수 3개 생성
//catch문이 다 처리하므로 reject받을 필요는 없음, 맨 마지막에서 만 받으면 됨
function promFunc1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1번쨰 비동기함수 실행");
            resolve();
        }, 2000);
    });
};

function promFunc2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("2번쨰 비동기함수 실행 완 ");
            resolve();
        }, 1500);
    });
};

function promFunc3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3번쨰 비동기함수 실행 완");
            resolve();
        }, 1000);
    });
};

//비동기 함수 호출

//await에서 실행완료를 기다림
//catch에서 오류처리함
async function print(){
    try{
        await promFunc1();
        console.log("2번째 비동기함수 실행");
        await promFunc2();
        console.log("3번째");
        await promFunc3();
        console.log("작업완료");
    }catch(error){
        console.error("오류발생", error);
    }
};
print();