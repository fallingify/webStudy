const data = 10; //const로 선언된 변수는 한번 선언되면 다시 선언할 수 없다.
// const data = 12; //재할당도 불가능

console.log(data);

//지역변수
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//  console.log(i); i는 for문안에서 사용된지역변수이므로 영역 밖에서 출력불가능
