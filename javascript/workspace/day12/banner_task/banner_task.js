//슬라이드 이미지 감싸고 있는 부모요소
let $bannerBox = $(".banner-box");
//슬라이드 이미지
let $bannerImgs = $(".banner-img");

//슬라이드 이미지 너비
let bannerWidth = 600;
//슬라이드 이미지 인덱스 번호
let currentIdx = 0;
//총 슬라이드 이미지 수
let slideCnt = $bannerImgs.length;

console.log(`slideCnt : ${slideCnt}`);

$(".next").on("click", moveNext);
function moveNext() {
    console.log(`슬라이드 다음 클릭`);
    currentIdx++;
    console.log(`currentIdx : ${currentIdx}`);

    $bannerBox.css("left", -(currentIdx * bannerWidth));
    $bannerBox.css("transition", "0.5s ease");
    checkEnd();
}

function moveFirst() {
    currentIdx = 0;
    checkEnd();
    $bannerBox.css("transition", "none");
    $bannerBox.css("transition", "0.5s ease");
    $bannerBox.css("left", 0);
}

$(".prev").on("click", function () {
    console.log(`슬라이드 이전 클릭`);
    currentIdx--;
    console.log(`currentIdx : ${currentIdx}`);

    $bannerBox.css("left", -(currentIdx * bannerWidth));
    $bannerBox.css("transition", "0.5s ease");
    checkEnd();
});

checkEnd();

//처음 이미지와 마지막 이미지는 화살표 감추기
function checkEnd() {
    if (currentIdx <= 0) {
        $(".prev").css("display", "none");
    } else {
        $(".prev").css("display", "block");
    }

    if (currentIdx >= slideCnt - 1) {
        $(".next").css("display", "none");
    } else {
        $(".next").css("display", "block");
    }
}

setInterval(function () {
    if (currentIdx == slideCnt - 1) {
        // 맨처음으로 돌아갈 수 있도록 함수
        moveFirst();
    } else {
        moveNext();
    }
}, 3000);


//매개변수로 넘겨준 시간 뒤에 핸ㄷ르러 함수 실행
setTimeout(function(){
    alert("setTimeout");

})

//매개변수로 넘겨준 시간마다 핸들러 함수를 실행
setInterval(function(){
    alert("setInterval");
    
})