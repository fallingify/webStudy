//callback function문제점
//callback function의 중첩


//3개의 비동기함수
function callFunc1(callback){
    setTimeout(() => {
        console.log("1비동기함수실행");
        callFunc2(() => {
            console.log("2비도기함수실행");
            callFunc3(() => {
                console.log("3비동기함수실행");
                callback();
            });
        });
    }, 1000);
};

function callFunc2(callback) {
    setTimeout(() => {
        console.log("2비동기함수실행완료");
        callback();
    }, 1500);
};

function callFunc3(callback) {
    setTimeout(() => {
        console.log("3비동기함수실행완료");
        callback();
    }, 2000);
};




//비동기함수 호출하여 실행한다
callFunc1(() => {
    console.log("직업완료");
});

