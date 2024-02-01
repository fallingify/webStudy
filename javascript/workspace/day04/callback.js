//1. 문자열을 인수로 받아 역순으로 뒤집을 결과를 반환하는 함수
//콜백을 사용하여 문자열을 역순으로 출력
//함수명은 printStr(문자열)
//함수명은 reverseStr()
function reverseStr(input){
    let reversed = "";
    for(let i=input.length-1; i >=0; i--){
        reversed += input[i];
    }
    return reversed;
};
function printStr (input, callback) {
    const reversed = reverseStr(input);
    callback(reversed);
};
const data = "Hello";
printStr(data, function(reversed){
    console.log(reversed);
});


// 2. 성과 이름을 전달받아서 풀네임을 만든뒤 000님 환영합니다 출력하기
function getFullname(last, first, callback){
    if(callback){
        callback(last + first);
    }
    return last + first;
}

getFullname("lee", "ji", function(name){
    console.log(`${name}님 환영합니다`);
});



// 3. 사용자의 나이를 입력 후 성인이면 true 반환, 아니면 false 반환
function chAge(age, callback){
    if(callback){
        return callback(age >= 20);
    }
    return age >= 20;
}

const isAdult = (result) => result;

console.log(chAge(20, isAdult));
console.log(chAge(10, isAdult));