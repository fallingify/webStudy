const promise = new Promise(function(resolve, reject){
    check = false;
    if(check){
        resolve("성공"); //이행
    }else{
        reject("실패"); //거부
    }
});
promise.then(console.log).catch(console.log);

