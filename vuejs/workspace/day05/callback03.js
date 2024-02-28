//callback함수의 3번쨰 문제점 : 오류처리의 어려움

function callFunc(callback){
    setTimeout(() => {
        const error = Math.random() < 0.5? new Error("오류발생"): null; 
        if(error) {
            callback(error);
        } else{
            console.log("비동기함수실행완료");
        }
    }, 2000);
};


//비동기함수 호출
callFunc((error) => {
    if(error){
        console.error("오류발생", error); 
    } else{
        console.log("작업완료");
    }
});
//문제점
//비동기 함수 내부에서 오류가 발생할 수 있으며 해당 오류는 콜백함수를 통해 전달함
//오류처리가 복잡하고 번거롭고 오류가 발생한 경우 어떤 비동기 작업에서 발생했는지 파악어려움

//promise로 해결가능
