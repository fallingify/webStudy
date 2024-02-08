//HTML 요소를 id로 가져오기
let title = document.getElementById("title");
console.log(title);

//HTML 요소를 class로 가져오기
let divBox = document.getElementsByClassName("divBox");
console.log(divBox);

//가져온 요소에서 특정요소만 사용하고싶다면 인덱스를 사용
console.log(divBox[0]);

//querySelector를 사용하면 자유롭게 선택자를 사용해서 요소들을 가져올 수 있음
let bgRed = document.querySelector("bg-red");
console.log(bgRed);

//queryselectorAll는 여러 요소를 가져옴
let divBorder = document.querySelectorAll(".div-border");
console.log(divBorder);

//가져온 요소의 text를 가져오기
console.log(title.innerText);

//가져온 요소의 text 수정하기(태그는 미적용)
title.innerText = "<i>innerText사용</i>";

//가져온 요소의 text와 내부 태그까지 가져오기
console.log(bgred.innerHTML); //아무것도 없음

//가져온 요소의 내부에 태그 삽입하기
bgred.innerHTML = "<div>내부에 div넣기</div>";

//요소의 특정 속성 가져오기
console.log(bgred.getAttribute("class"));

//요소의 속성변경하기
bgred.setAttribute("style", "background-color: red");

//나머지div도Dom을 이용하여 id와 일치하는 background-color로 변경하기
document
  .querySelector("#bggreen")
  .setAttribute("style", "background-color: green");

document
  .querySelector("#bgyellow")
  .setAttribute("style", "background-color:yellow");

//div-border 클래스를 가진 요소들은 테두리 두께를 2px를 주고 5px 둥글게
console.log(document.querySelectorAll(".div-border")); //노드배열임
document
  .querySelectorAll(".div-border")[0]
  .setAttribute("style", "border : 2px solid black; border-radius: 5px");
/*
let borders = document.querySelectorAll(".div-border");
for (let i = 0; i < borders.length; i++) {
  borders[i].setAttribute(
    "style",
    "border : 2px solid black; border-radius: 5px"
  );
} //다 좋은데 기존 css가 지워져버림
*/

//CSS style은 다른 방식으로 변경도 가능
//요소.style.속성명
//html 요소의 프로퍼티를 직접 수정하는 것도 방법
console.log(bgred.style);
console.log(bgred.style.backgroundColor);
bgred.style.backgroundColor = "red";

//setAttribute()는 인라인스타일을 무조리 지워버리고 덮어쓰는 반면
//style프러퍼티를 사용하면 특정 프러퍼티에 직접 접근해서 수정 가능
//속성명은 그대로 사용하면되지만 background-color처럼 - 가 포함된 속성은 카멜표기법으로 변환하여 사용한다
