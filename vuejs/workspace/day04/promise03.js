//2개의 비동기작업을 동기화해보자
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1번째 작업완료");
    }, 1000);

});
//p2도 위와 같은 코드, 작성방식만 상이
const p2 = (result) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(result + "2번째 작업완료");
        }, 1000);
    });
};

p1.then((result) => {
    console.log(result); 
    return p2(result);
})
.then((result) => {
    console.log(result);
})
.catch((e) => {
    console.log("오류발생 : " + e);
});