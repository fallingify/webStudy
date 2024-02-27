//3개의 비동기 작업을 순차적으로 실행

//첫번째 작업은 1초 후 "첫번째 작업완료" 메시지반환
//두번째 작업은 첫번째 작업에서 반환된 메시지를 받아들여서 "두번째 작업완료" 메시지반환
//세번째 작업은 3초후 오류를 발생시킴


const p1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("첫번째 작업완료");
    }, 1000);
});

const p2 = (msg) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(msg + "2번째 작업완료");
        }, 0);
    });
};

const p3 = (msg) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            reject("세번째 작업오류 발생");
        }, 300);
    });
};

p1().then((result) => {
    console.log(result);
    return p2(result);
}).then((result) => {
    console.log(result);
    return p3(result);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error("에러발생 : ", error);
});