//async/await 사용 예
async function print(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("성공")
        }, 1000);
    });
    let result = await promise;
    console.log(result);
};

print();
//setTimeout()을 쓰면 비동기를 1초후에 resolve를 호춣하지만 await를 통해 1초를 기다린 후 
//결과를 출력하므로 
//동기식으로 동작함

