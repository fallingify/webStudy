let boxclick = document.querySelector("#click");
let boxOver = document.querySelector("#over");
let boxOut = document.querySelector("#out");
let boxOverOut = document.querySelector("#over-out");

function changeBgGreen() {
    boxclick.setAttribute("style", "background-color : green");

}
boxclick.addEventListener("click", changeBgGreen);

boxOver.addEventListener("mouseover", function() {
    boxOver.setAttribute("style", "background-color : red");
});

function changeBgBlue(){
    boxOut.setAttribute("style", "background-color: blue");
}

boxOut.addEventListener("mouseout", changeBgBlue);

boxOverOut.addEventListener("mouseover", changeBgGreen);
boxOverOut.addEventListener("mouseout", changeBgBlue);


