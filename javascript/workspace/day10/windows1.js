// window.onload = () => {
//     alert("로드 이벤트 발생 ");
// }


window.addEventListener('load', () => {
    alert("로드!");
})

let main = document.querySelector("main");
let color = main.style.backgroundColor

window.addEventListener('scroll', () => {
    // scrollY 프로퍼티는 현재 스크롤의 y축 위치를 가지고 있음
    let scrollY = window.scrollY;
    console.log(scrollY);

    if(scrollY > 400) {
        main.style.backgroundColor = "gold";
    } else if(scrollY > 200) {
        main.style.backgroundColor = "blue";
    } else if(scrollY > 100) {
        main.style.backgroundColor = "green";
    } else {
        main.style.backgroundColor = color; 
    }
})

