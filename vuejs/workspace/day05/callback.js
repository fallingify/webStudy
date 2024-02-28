//callback.js

function timeLog(callback){
    setTimeout(() => {
        console.log("1");
        callback();
    }, 3000);
}; 

//함수를 매개변수로 받는 함수를 콜백함수라고 함

function printMsg(){
    console.log("2");
};

timeLog(printMsg);
