let input1 = document.querySelector(".input-test1");
let input2 = document.querySelector(".input-test2");
let form = document.querySelector("form");
// console.log(input1);

//해당 요소가 포커스 되면 이벤트 발생(선택되면)
input1.addEventListener("focus", () => {
    console.log("focus");
});

//blur 포커스를 잃으면 발생하는 이벤트
input1.addEventListener("blur", () => {
    console.log("blur~");
});

//keydown 키보드를 누르는 동안 계속 발생하는 이벤트(키가 눌리면 입력과 상관없이 발생 컨트롤 등등)
input2.addEventListener("keydown", () => {
    console.log("down");
});

//keypress 키보드를 누르는 순간 발생(키보드로 무언가가 입력되어야 발생)
input2.addEventListener("keypress", () => {
    console.log("press");
});

//keyup 키보드를 떼는 발생
input2.addEventListener("keyup", () => {
    console.log("keyup");
});