let $slideBox = $(".slide-box");
let $slideImgs = $(".slide-img");

// 슬라이드박스너비
let slideWidth = 600;
// 슬라이드 이미지 인덱스 번호
let currentIdx = 0;
// 총 슬라이드 이미지 수
let slideCnt = $slideImgs.length;
console.log("slideCnt");


//슬라이드 작동 : 이전 이미지 or 다음 이미지
$(".next").on("click", function(){
    console.log("다음 클릭")
    ++currentIdx;
    console.log("curentIdx: " + currentIdx);
    $slideBox.css("left", -(currentIdx * slideWidth));
    $slideBox.css("transition", "0.5s ease");
    checkEnd();
})

$(".prev").on("click", function(){
    console.log("이전 클릭")
    --currentIdx;
    console.log("curentIdx: " + currentIdx);
    $slideBox.css("left", +(currentIdx * slideWidth));
    $slideBox.css("transition", "0.5s ease");
    checkEnd();
})

//처음 이미지와 마지막 이미지는 화살표 감추기
function checkEnd(){
    //처음
    if(currentIdx <= 0) {
        $(".prev").css("display", "none");
    }else{
        $(".prev").css("display", "block");
    }
    //마지막
    if(currentIdx >= slideCnt-1){
        $(".next").css("display", "none");
    } else{
        $(".next").css("display", "block");
    }
}