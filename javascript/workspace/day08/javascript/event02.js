let boxClick = document.querySelector("#click");
let boxOver = document.querySelector("#over");
let boxOut = document.querySelector("#out");
let boxOverOut = document.querySelector("#over-out");

function changeBgGreen() {
  boxClick.setAttribute("style", "background-color:green");
}

boxClick.addEventListener("click", changeBgGreen);

boxOver.addEventListener("mouseover", function () {
  boxOver.setAttribute("style", "background-color :red");
});

function changeBgBlue() {
  //boxOut.setAttribute("style", "background-color:blue");
  //현재 이벤트가 걸린 요소의 스타일을 바꾸고 싶다면
  //이벤트가 걸린 자기자신을 의미하는 this
  //를 이용한다
  this.setAttribute("style", "background-color: blue");
}

boxOver.addEventListener("mouseover", changeBgGreen);
boxOverOut.addEventListener("mouseout", changeBgBlue);
