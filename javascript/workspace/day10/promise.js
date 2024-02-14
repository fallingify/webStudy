const DB = [];

function saveDB(user) {
    const beforeLength = DB.length;
    const afterLength = DB.push(user);
    console.log(`저장 ${user.name}`);
    return new Promise((resolve, reject)=> {
        if(beforeLength < afterLength) {
            resolve(user);  //프로미스를 이행
        } else {
            reject(new Error("저장되지 않았습니다")); //프로미스를 거부
        }
    });
}

function sendEmail(user) {
    console.log(`이메일 ${user.email}`)
    return new Promise((resolve) => {
        resolve(user); //프로미스 객체를 생성하여 반환, 프로미스를 이행
    });
}

function getResult(user) {
    return new Promise((resolve) => {
        resolve(`방문자 ${user.name}`); //프로미스를 이행, 사용자 이름을 포함한 결과를 반환
    });
}

// 사용자 등록함수 
function register(user) { 
    const resultAsync = Promise.all([ //promise.all 여러 프로미스를 병렬로 실행
        saveDB(user),
        sendEmail(user),
        getResult(user),
    ]);
    resultAsync.then(console.log);
}

register({
    name: "lee", 
    email: "goo@gmail.com",
})

