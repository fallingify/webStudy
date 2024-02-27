//날짜와 이름, 내용을 이용하여 출력
const date = new Date();
let name = "ljh";
let content = `안녕하세요, ${name} 님.

이번주 모임 일정 안내드립니다.
일자 : ${date}
시간 : 오후2시
장소 : cityhall 강남점

참석 가능 여부를 확인해주세요
` 

console.log(content);