//promise 체이닝
//흐름 : p -(resolve) -> then -(revolve) -> then -(resolve) -> then ...
var p = new Promise((resolve, reject) => {
    resolve('첫');
}).then((msg) => {
    console.log(msg); throw new Error("e!"); return '두';
}).then((msg) => {
    console.log(msg); return "셋";
}).then((msg) => {
    console.log(msg); 
})

//예외처리 어디서? .catch()를 사용함
//catch()를 마지막에 하나 배치하면 
//위 어디 then()이든지 catch()문 하나가 다 처리함
.catch((error) => {
    console.log("오류 발생 : " + error);
})

