const input = document.querySelector("input[type='button']");
const p = document.querySelector("p");
input.addEventListener("click", function () {
  with (p.style) {
    fontSize = "30px";
    border = "3px dashed magenta";
    width = "100px";
    backgroundColor = "pink";
  }
});
