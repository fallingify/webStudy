// 오류처리의 어려움을 async / await로 해결

//임의의 오류발생시킨다
//성공시에는 비동기 함수 실행완료 2초대기(resolve, reject)
//작업완료 출력
//오류발생시 오류발생 : 에러메시지 출력
//실행함수 print() 는 사용


//비동기함수
function callFunc(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random() < 0.5? new Error("오류발생"): null; 
            if(error) {
                reject(error);
            } else{
                console.log("1번째 완료");
                resolve();
            }
        }, 2000);
    });
};

//async await로 해결
async function print(){
    try{
        await callFunc();
        console.log("작업완료");
    }catch(error){
        console.error("오류발생", error);
    }
};
print();



//작업의 순서가 중요할 때 