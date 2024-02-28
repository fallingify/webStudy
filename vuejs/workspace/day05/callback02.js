//callback function문제점
//callback function함수의 단계적 실행됨

function callFunc1(callback) {
    setTimeout(() => {
        console.log("1비동기함수실행")
    }, 1000)
}

function callFunc2(callback) {
    setTimeout(() => {
        console.log("2비동기함수실행");
        callback();
    }, 1500);
};

function callFunc3(callback) {
    setTimeout(() => {
        console.log("3비동기함수실행");
        callback();
    }, 1000);
};



//호출
//첫번째 비동기 함수 호출
callFunc1(() => {
    callFunc2(() => {
        callFunc3(() => {
            console.log("작업완료");
        });
    });
});

//문제점
//코드가 단계적으로 실행되어야 할떄 중첩된 콜백함수를 사용해야함
//비동기 작업이 많아질수록 코드의 복잡성이 증가하고 가독성도 떨어짐


