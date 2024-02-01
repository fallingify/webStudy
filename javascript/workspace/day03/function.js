function add(num1, num2 = 3){
    return num1 + num2; 
}

// var result = add(1, 2); 
// console.log(result);

// var result1 = add(1); 
// console.log(result1);

//디폴트 파라미터 : 값이 전달되지 않을 경우 초기값을 설정할 수 있다

//아이디, 비밀번호, 이름을 전달받고 이름은 기본값을 "사용자"로
function introduce(id, pw, name = "사용자") {
    console.log(id, pw, name); 
}
//함수호출
//함수명(인수1, 인수2)
// introduce("아이디", "비밀번호"); 
// introduce("ljh123", "1234", "이름");

//가변파라미터(인자) : 함수 호출 시 몇 개의 값이 전달될 지 모를때 사용한다
function add1(...numbers){
    console.log(numbers);

    for(let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]); //값
    }

    //빠른 for문 사용시 인덱스 번호가 출력됨
    for(let i in numbers){
        console.log(i); //인덱스
        console.log(numbers[i]); //깂
    }
}

// add1(1, 2, 3, 4); 
// add1(1, 2); 

//이름과 나이를 가변인자로 전달받아 출력하기
function info(...args) {
    console.log("이름 : " + args[0]);
    console.log("나이 : " + args[1] + "세");
}
// info("ljh", 20); 

//객체를 사용
function info1(person) {
    console.log("이름 : " + person.name); 
    console.log("나이 : " + person.age + "세");

}

let personInfo = {name : "ljh", age : 20};
info(personInfo); 


