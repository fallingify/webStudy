async function getName(){
    return "lj";
}

//async 키워드로 선언된 함수는 Promise 객체를 반환
async function printName(){
    const name = await getName();
    console.log(name);
}

printName();

