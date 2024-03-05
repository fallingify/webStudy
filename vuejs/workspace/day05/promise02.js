//콜백함수의오류 처리 어려움을 promise로 해결

function callFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random() < 0.5? new Error("오류발생") : null; 
            if(error){
                reject(error); 
            } else{
                console.log("비동기함수 실행완료");
                resolve();
            }
        }, 2000);
    });
};

//비동기 함수 호출 + 오류처리
callFunc()
.then(() => {
    console.log("작업완료");
})
.catch((error) => {
    console.log("오류발생", error);
});

