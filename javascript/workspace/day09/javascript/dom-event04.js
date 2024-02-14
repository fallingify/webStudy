//전체 동의 완성하기

NodeList.prototype.map = Array.prototype.map; //맵을 복사 

const all = document.querySelector("input.all");
const terms  = document.querySelectorAll("input.term");

all.addEventListener("click", () => {
    terms.forEach((term) => {
        term.checked = all.checked;
    });
});

terms.forEach((term) => {
    term.addEventListener("click", (e) => {
        all.checked = terms.map((term) => term.checked).filter((checked) => checked)
        .length === 3;
    });
});


