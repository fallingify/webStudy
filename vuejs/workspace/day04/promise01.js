//비동기 처리 결과 0~1사이의 난수를 발생시키고 이 값이 0.7이상이면 잘못된 값으로 보고
//reject() 호출, 그렇지 않다면 resolve() 호출

//setTimeout()
//Math.random()



//p객체 생성(1)
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.random();
        if(num >= 0.7){
            reject("생성된 숫자는 0.7이상" + num);
        }
        resolve(num);
    }, 1000);
}); 

//p객체 생성후 처리(2)
p.then((result) => {
    console.log("결과 : " + result); //then은 promise객체를 반환
}).catch((err) => {
    console.log("오류 : " + err);
});

console.log("===Promise 객체 생성===");
