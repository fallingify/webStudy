//globalThis 변수 하나만 선언하여
//변수 num1과 변수num2 값을 바꾸는 함수 만들기
//출력순서는 동일

let num1 = 10;
let num2 = 20;
globalThis.num;

function changeNumber(x, y) {
  globalThis.num = x;
  x = y;
  y = globalThis.num;

  console.log(x, y);
}
changeNumber(num1, num2);
