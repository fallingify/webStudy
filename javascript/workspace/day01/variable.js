//동적 바인딩: 컴파일시 값에 따라 자료형이 동적으로 결정된다.
var data = 10;
console.log(data);
console.log(typeof data);

var age;
console.log(age);

//hoisting(호이스팅) : 선언에 위치에 상관없이 존재하면 메모리에 할당되는 것을 의미
//초기화작업은 호이스팅되지않고 선언만 호이스팅됨
console.log(data2);
var data2 = 10;
console.log(data2);

var data3 = "절대수정이불가";
//가능한 한 var로 변수선언을 추천(오래된 javascript버전에서 사용된다.ㅣ)
//현재는 let이나 const사용을 권장함(변수의 scope와 hoisting동작)
data3 = "안녕";
console.log(data3);
