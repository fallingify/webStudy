const DB = [];

function saveDB(user) {
    const beforeLength = DB.length;
    const afterLength = DB.push(user);

    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`저장 ${user.name}`)
            if(beforeLength < afterLength) {
                resolve(user);
            } else{
                reject(new Error("저장하지 못했습니다"))
            }
        }, 3000);
    });
}

function sendEmail(user){
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log(`저장 ${user.email}`)
            resolve(user);
        }, 2000);
    })
}

function getResult(user) {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log(`성공`)
            resolve(`방문자 ${user.name}`);
        }, 1000);
    });
}

function register(user){
    const resultAsync = Promise.all([
        saveDB(user), 
        sendEmail(user), 
        getResult(user),
    ]);
    resultAsync.then(console.log);
}

register({
    name: " adsf",
    email: "qqq@gmail.com"
})