const button = document.querySelector("button[type=button]");
const id = document.querySelector("input[name=id]");
const pw = document.querySelector("input[name=pw]");
const idResult = document.querySelector("#id-result");
const pwResult = document.querySelector("#pw-result");

button.addEventListener("click", () => {
  if (!id.value) {
    idResult.innerText = "아이디를입력하세요";
    idResult.style.color = "red";
    return;
  }

  idResult.innerText = "멋진아이디어";
  idResult.style.color = "blue";

  if (!pw.value) {
    pwResult.innerText = "비밀번호를 입력하세요";
    pwResult.style.color = "red";
    return;
  }

  pwResult.innerText = "검증완료";
  pwResult.style.color = "green";
});
