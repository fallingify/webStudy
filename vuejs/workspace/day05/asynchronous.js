//비동기
function timeLog(){
    setTimeout(() => {
        console.log("두번째");
    }, 2000);
};

function printMsg (){
    console.log("세번째");
};

timeLog();
printMsg();
console.log("첫번쨰");


